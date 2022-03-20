/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:31:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-20 17:57:54
 * @Description: file content
 */
interface FileLike {
  name: string
  path: string
  size: number
  lastModified: number
  webkitRelativePath: string
  type: string
}

interface FileLikeUpload extends FileLike {
  total: number
  loaded: number
  percent: number
  done: boolean
  fail: boolean
  link: string
}

interface ProgressEventListener {
  (data: Array<FileLikeUpload>): void
}

interface ExtensionHostMessage {
  type: 'progress'
  data: Array<FileLikeUpload>
}

interface MessageInfo {
  visible: boolean
  type?: 'success' | 'error' | 'info'
  message: string
  duration?: number
}

interface Window {
  showMessage(info: MessageInfo): void
}
