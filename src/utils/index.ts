/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:21:57
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-17 20:31:37
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

export function cloneFiles(files: FileList): FileLike[] {
  return [...files].map((item: File) => ({
    name: item.name,
    path: item.path,
    size: item.size,
    lastModified: item.lastModified,
    webkitRelativePath: item.webkitRelativePath,
    type: item.type
  }))
}

export function getExtension(fileName: string) {
  const lastIndexDot = fileName.lastIndexOf('.') + 1
  return fileName.substring(lastIndexDot)
}

export default function none() {
  console.log('none')
}
