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

// 设置项
interface SettingObject {
  key: string
  displayName: string
  value?: string
  placeholder?: string
  required?: boolean
}

interface SettingObjectInput extends SettingObject {
  type: 'input'
}

interface SettingObjectSelect extends SettingObject {
  type: 'select'
  options: string[]
}

type SettingObjectWithField = SettingObjectInput | SettingObjectSelect

interface SettingExtensionHostMessageData {
  extension: string
  extensionDisplayName: string
  setting: SettingObjectWithField[]
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

// 语言宿主发送的信息-语言列表
interface LangHostMessageOfLangsList {
  type: 'langsList'
  data: string[]
}

interface LangData {
  lang: string
  langJsonData: string
}

// 语言宿主发送的信息-语言数据
interface LangHostMessageOfLangData {
  type: 'langData'
  data: LangData
}

// 语言宿主发送的信息-联合类型
type LangHostMessage = LangHostMessageOfLangsList | LangHostMessageOfLangData

interface OnLangsListChangeCallback {
  (langs: string[]): void
}

interface OnLangChangeCallback {
  (data: LangData): void
}
