/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:31:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 11:31:24
 * @Description: file content
 */
interface FileLike {
  name: string
  path: string
}

interface FileLikeUpload extends FileLike {
  total: number
  loaded: number
  percent: number
  done: boolean
  fail: boolean
  link: string
  w: number
  h: number
}

interface ExtensionHostMessageOfProgress {
  type: 'progress'
  data: Array<FileLikeUpload>
}

// 设置
interface SettingObject {
  key: string
  displayName: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
}

interface SettingExtensionHostMessageData {
  extension: string
  extensionDisplayName: string
  setting: SettingObject[]
}

interface ExtensionHostMessageOfSetting {
  type: 'setting'
  data: SettingExtensionHostMessageData
}

interface ProgressEventListener {
  (data: Array<FileLikeUpload>): void
}

type ExtensionHostMessage = ExtensionHostMessageOfProgress | ExtensionHostMessageOfSetting

interface MessageInfo {
  visible: boolean
  type?: 'success' | 'error' | 'info'
  message: string
  duration?: number
}

interface Window {
  showMessage(info: MessageInfo): void
}

interface MainApiCallback<DataType> {
  (error: any, data: DataType): void
}

type SettingMap = Map<string, SettingExtensionHostMessageData>

interface OnSettingCallback {
  (data: SettingMap): void
}
