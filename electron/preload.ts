/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-17 20:06:16
 * @Description: file content
 */
import { ipcRenderer, contextBridge } from 'electron'
import createExtensionHost from './extension'

const extensionHost = createExtensionHost()
const progressEvents: ProgressEventListener[] = []

declare global {
  interface Window {
    bank: typeof api
    ipcRenderer: typeof ipcRenderer
  }
}
interface FileLike {
  name: string
  path: string
  size: number
  lastModified: number
  webkitRelativePath: string
  type: string
}

interface ProgressEventListener {
  (data: Array<any>[]): void
}

interface ExtensionHostMessage {
  type: 'progress'
  data: any
}

const api = {
  upload(files: FileLike[]) {
    extensionHost.send({
      type: 'upload',
      data: files
    })
  },
  onProgress(e: ProgressEventListener) {
    progressEvents.push(e)

    return () => {
      progressEvents.splice(progressEvents.indexOf(e), 1)
    }
  }
}

extensionHost.on('message', (data: ExtensionHostMessage) => {
  if (data.type === 'progress') {
    progressEvents.forEach((e) => e(data.data))
  }
})

contextBridge.exposeInMainWorld('bank', api)
