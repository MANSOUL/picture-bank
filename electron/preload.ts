/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 09:53:19
 * @Description: file content
 */
import { ipcRenderer, IpcRendererEvent, contextBridge, clipboard } from 'electron'
import createExtensionHost from './extension'
import createLangHost from './lang'

const extensionHost = createExtensionHost()
const langHost = createLangHost()

const progressEvents: ProgressEventListener[] = [] // 存放监听上传进度的事件
const mainApiCallbacks: Map<string, MainApiCallback<any>> = new Map() // 存放调用主线程API的回调函数
const settingMap: SettingMap = new Map() // 存放所有插件的设置
let onSettingCallback: OnSettingCallback | null = null // 通知UI设置项有变化
let langsList: string[] = []
let onLangsListChangeCallback: OnLangsListChangeCallback | null = null // 通知UI语言列表有变化
let onLangDataChangeCallBack: OnLangChangeCallback | null = null // 通知UI新的语言数据

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
  },
  applySetting(extension: string, setting: { [k: string]: string }) {
    extensionHost.send({
      type: 'setting',
      data: {
        extension,
        setting
      }
    })
  },
  onLangsListChange(callback: OnLangsListChangeCallback) {
    onLangsListChangeCallback = callback
    if (langsList.length > 0) {
      onLangsListChangeCallback(langsList)
    }
    return () => {
      onLangsListChangeCallback = null
    }
  },
  onLangDataChange(callback: OnLangChangeCallback) {
    onLangDataChangeCallBack = callback
    return () => {
      onLangDataChangeCallBack = null
    }
  },
  changeLang(lang: string) {
    langHost.send({
      type: 'langChange',
      lang
    })
  },
  changeLangList() {
    langHost.send({
      type: 'langListChange'
    })
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

langHost.on('message', (data: LangHostMessage) => {
  if (data.type === 'langsList') {
    langsList = data.data
    if (onLangsListChangeCallback) {
      onLangsListChangeCallback(langsList)
    }
  }
  if (data.type === 'langData' && onLangDataChangeCallBack) {
    onLangDataChangeCallBack(data.data)
  }
})

contextBridge.exposeInMainWorld('bank', api)
