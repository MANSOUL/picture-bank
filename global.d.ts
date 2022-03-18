/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:31:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-18 11:27:42
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
}

interface ProgressEventListener {
  (data: Array<FileLikeUpload>): void
}

interface ExtensionHostMessage {
  type: 'progress'
  data: Array<FileLikeUpload>
}
