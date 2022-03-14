/*
 * @Author: kuanggf
 * @Date: 2022-03-14 12:02:44
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 12:02:45
 * @Description: file content
 */
import React from 'react'
import FileIcon from './fileIcon'
import CloseIcon from './closeIcon'

export default function UploadItem() {
  return (
    <div className="flex items-center p-3 rounded hover:shadow-xl hover:shadow-indigo-500/20">
      <div className="shrink-0 w-8 h-10">
        <FileIcon type="png" />
      </div>
      <div className="grow mx-4">
        <div className="flex justify-between">
          <span className="text-sm text-black/70">name.png</span>
          <span className="text-sm text-slate-400">88%</span>
        </div>
        <div className="h-1 mt-2 rounded bg-slate-300">
          <div className="w-1/2 h-full rounded overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>
      </div>
      <div className="shrink-0">
        <CloseIcon />
      </div>
    </div>
  )
}
