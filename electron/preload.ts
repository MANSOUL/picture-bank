/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 09:53:19
 * @Description: file content
 */
import { ipcRenderer, IpcRendererEvent, contextBridge, clipboard } from 'electron'
import createExtensionHost from './extension'

const extensionHost = createExtensionHost()
const progressEvents: ProgressEventListener[] = []
const mainApiCallbacks: Map<string, MainApiCallback<any>> = new Map()
let onSettingCallback: OnSettingCallback | null = null
const settingMap: SettingMap = new Map()

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
  },
  openFileDialog(callback: MainApiCallback<Electron.OpenDialogReturnValue>) {
    const eventType = 'showOpenDialog'
    const eventId = `${eventType}_${Date.now()}`
    mainApiCallbacks.set(eventId, callback)
    ipcRenderer.send('mainApi', eventType, eventId)
  },
  onSetting(callback: OnSettingCallback) {
    onSettingCallback = callback
    if (settingMap.size > 0) {
      callback(settingMap)
    }
    return () => {
      onSettingCallback = null
    }
  }
}

ipcRenderer.on('mainApiResult', (_event: IpcRendererEvent, eventId: string, data) => {
  const callback = mainApiCallbacks.get(eventId)
  if (callback) {
    callback(data.error, data.data)
    mainApiCallbacks.delete(eventId)
  }
})

extensionHost.on('message', (data: ExtensionHostMessage) => {
  if (data.type === 'progress') {
    progressEvents.forEach((e) => e(data.data))
  }
  if (data.type === 'setting') {
    settingMap.set(data.data.extension, data.data)
    if (onSettingCallback) {
      onSettingCallback(settingMap)
    }
  }
})

contextBridge.exposeInMainWorld('bank', api)
