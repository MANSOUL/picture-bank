/*
 * @Author: kuanggf
 * @Date: 2022-03-14 17:51:16
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-15 16:25:21
 * @Description: file content
 */
import React from 'react'
import UploadIcon from './uploadIcon'
import { cloneFiles } from '../utils'

export default function FileChoice() {
  const handleDrop: React.DragEventHandler = (e) => {
    e.preventDefault()
    const { files } = e.dataTransfer
    console.log(files)
    if (files) {
      window.bank.upload(cloneFiles(files))
    }
  }

  return (
    <div
      className="
            border border-dashed rounded flex flex-col items-center mt-7 p-5 bg-gradient-to-b from-indigo-500/0 to-indigo-500/5
          "
      onDrop={handleDrop}
    >
      <div className="w-14 h-14">
        <UploadIcon className="fill-indigo-200" />
      </div>
      <p className="font-sans text-sm text-slate-500">Drag & Drop your files here</p>
      <p className="text-sm text-slate-400 my-1.5">OR</p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-xs text-white rounded-sm px-4 py-1.5 shadow-lg shadow-indigo-500/50">
        Browser Files
      </button>
    </div>
  )
}
