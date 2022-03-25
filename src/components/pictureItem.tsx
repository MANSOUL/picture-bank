/*
 * @Author: kuanggf
 * @Date: 2022-03-25 14:39:04
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 17:41:43
 * @Description: file content
 */
import React from 'react'
import { Picture } from '../db'
import { formatTime } from '../utils'

interface PictureItemProps {
  data: Picture
}

export default function PictureItem({ data }: PictureItemProps) {
  const handleCopyLink = () => {
    window.bank.writeTextToClipboard(data.remotePath)
    window.showMessage({
      type: 'success',
      message: '图片链接已复制',
      visible: true
    })
  }

  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg shadow-slate-300/50">
      <div className="w-44 h-44">
        <img className="w-full h-full object-cover" src={data.remotePath} alt={data.fileName} />
      </div>
      <div
        title="click to zoom out"
        className="absolute flex flex-col justify-end p-3 w-full h-full left-0 bottom-0 bg-black/40 transition-transform translate-y-full group-hover:translate-y-0"
      >
        <button
          onClick={handleCopyLink}
          title="click to copy link"
          className="text-white text-left text-sm font-medium truncate cursor-pointer"
        >
          {data.fileName}
        </button>
        <div className="text-white text-xs font-medium truncate">{formatTime(data.createdTime)}</div>
      </div>
    </div>
  )
}
