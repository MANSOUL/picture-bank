/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-18 18:51:28
 * @Description: file content
 */
import { ipcRenderer, contextBridge, clipboard } from 'electron'
import createExtensionHost from './extension'

const extensionHost = createExtensionHost()
const progressEvents: ProgressEventListener[] = []

declare global {
  interface Window {
    bank: typeof api
    ipcRenderer: typeof ipcRenderer
  }
}

const api = {
  writeTextToClipboard(text: string) {
    clipboard.writeText(text)
  },
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
