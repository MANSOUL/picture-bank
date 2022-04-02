/*
 * @Author: kuanggf
 * @Date: 2022-03-14 17:51:16
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 10:08:53
 * @Description: file content
 */
import React from 'react'
import UploadIcon from './uploadIcon'
import { cloneFiles, createFileLikeByPath } from '../utils'
import { useLang } from '../context/lang'

interface FileChoiceProps {
  onUpload(files: FileLike[]): void
}

export default function FileChoice({ onUpload }: FileChoiceProps) {
  const langContext = useLang()

  const handleDrop: React.DragEventHandler = (e) => {
    e.preventDefault()
    const { files } = e.dataTransfer
    if (files) {
      onUpload(cloneFiles(files))
    }
  }

  const handleOpenFileChoose = () => {
    window.bank.openFileDialog((error, data) => {
      if (error) {
        return
      }
      if (data.canceled) return
      if (data.filePaths.length > 0) {
        const files = data.filePaths.map((item) => createFileLikeByPath(item))
        onUpload(files)
      }
    })
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
      <p className="font-sans text-sm text-slate-500">{langContext.lang.DESC_DRAG_HERE}</p>
      <p className="text-sm text-slate-400 my-1.5">{langContext.lang.DESC_OR}</p>
      <button
        onClick={handleOpenFileChoose}
        className="bg-indigo-500 hover:bg-indigo-600 active:translate-y-0.5 text-xs text-white rounded-sm px-4 py-1.5 shadow-lg shadow-indigo-500/50"
      >
        {langContext.lang.BUTTON_BROWSER_FILES}
      </button>
    </div>
  )
}
