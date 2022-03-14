/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 14:20:54
 * @Description: file content
 */
import React from 'react'
import UploadIcon from '../components/uploadIcon'
import UploadItem from '../components/uploadItem'

export default function Upload() {
  return (
    <div className="h-full">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="pt-8 px-4 shrink-0">
          <p className="text-center text-lg uppercase font-bold text-slate-600">Upload Files</p>
          <p className="text-center text-sm text-slate-500 mt-1">Upload you image to cdn.</p>
          <div
            className="
            border border-dashed rounded flex flex-col items-center mt-7 p-5 bg-gradient-to-b from-indigo-500/0 to-indigo-500/5
          "
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
        </div>
        <div className="text-slate-400 mt-7 grow flex flex-col overflow-scroll">
          <p className="text-sm px-4 text-slate-400">Uploaded Files</p>
          <div className="pb-5 px-4 overflow-scroll">
            <ul>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
              <li className="mt-2">
                <UploadItem />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
