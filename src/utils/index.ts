/*
 * @Author: kuanggf
 * @Date: 2022-03-15 16:21:57
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 14:13:53
 * @Description: file content
 */

export function cloneFiles(files: FileList): FileLike[] {
  return [...files].map((item: File) => ({
    name: item.name,
    path: item.path
  }))
}

export function getExtension(fileName: string) {
  const lastIndexDot = fileName.lastIndexOf('.') + 1
  return fileName.substring(lastIndexDot)
}

export function createFileLikeByPath(path: string): FileLike {
  const name = path.substring(path.lastIndexOf('/') + 1)
  return {
    name,
    path
  }
}

const fixedZero = (n: number): string => {
  if (n > 9) return `${n}`
  return `0${n}`
}

export function formatTime(timestamp = Date.now()) {
  const date = new Date(timestamp)
  return `${date.getFullYear()}.${fixedZero(date.getMonth() + 1)}.${fixedZero(date.getDay())}`
}

export function isSupportedImageFormat(name: string) {
  const regExp = /\.(apng|avif|gif|jpg|jpeg|jpe|jif|jfif|png|svg|webp)$/i
  return regExp.test(name)
}

export default function none() {
  console.log('none')
}
