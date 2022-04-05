/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:31:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-05 15:38:44
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

interface SettingObjectOption {
  displayName: string
  value: string
}

interface SettingObjectSelect extends SettingObject {
  type: 'select'
  options: SettingObjectOption[]
}

type SettingObjectWithField = SettingObjectInput | SettingObjectSelect

interface SettingExtensionHostMessageData {
  extension: string
  extensionDisplayName: string
  setting: SettingObjectWithField[]
}

// 设置通信
interface ExtensionHostMessageOfSetting {
  type: 'setting'
  data: SettingExtensionHostMessageData
}

interface ProgressEventListener {
  (data: Array<FileLikeUpload>): void
}

// 消息提示通信
interface ExtensionHostMessageOfTip {
  type: 'tip'
  data: MessageInfo
}

// 获取上传的列表
interface ExtensionHostMessageOfUploadList {
  type: 'uploadList'
  data: Array<FileLikeUpload>
}

type ExtensionHostMessage =
  | ExtensionHostMessageOfProgress
  | ExtensionHostMessageOfSetting
  | ExtensionHostMessageOfTip
  | ExtensionHostMessageOfUploadList

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
  data: SettingObjectOption[]
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
  (langs: SettingObjectOption[]): void
}

interface OnLangChangeCallback {
  (data: LangData): void
}

interface OnShowMessageCallack {
  (data: MessageInfo): void
}

interface OnUploadListCallback {
  (data: FileLikeUpload[]): void
}
