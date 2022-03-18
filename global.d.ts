/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:31:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-18 11:19:22
 * @Description: file content
 */
interface ProgressEventListener {
  (data: Array<any>[]): void
}

interface ExtensionHostMessage {
  type: 'progress'
  data: any
}
interface FileLike {
  name: string
  path: string
  size: number
  lastModified: number
  webkitRelativePath: string
  type: string
}
