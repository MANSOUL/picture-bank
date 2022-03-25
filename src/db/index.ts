/*
 * @Author: kuanggf
 * @Date: 2022-03-24 19:08:28
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 13:58:35
 * @Description: file content
 */
import Dexie, { Table } from 'dexie'

export interface Picture {
  id?: number
  localAbsolutePath: string // 本地文件路径
  remotePath: string // 远程文件路径
  fileName: string // 文件名
  size: number // 文件大小
  width: number // 宽
  height: number // 高
  createdTime: number // 上传时间
  uploading: 0 | 1 //  是否上传中
  uploaded: 0 | 1 // 是否已上传
  remoteSource: string // 是谁存储了远程图片的
  removeSourceName: string // 存储了远程图片的远程源描述
}

const VERSION_ONE = 1

export class MySubClassedDexie extends Dexie {
  pictures!: Table<Picture>

  constructor() {
    super('myDatabase')
    this.version(VERSION_ONE).stores({
      pictures: '++id, &localAbsolutePath, remotePath, fileName'
    })
  }
}

export const db = new MySubClassedDexie()
