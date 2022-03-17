/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-17 20:24:27
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import FileChoice from '../components/fileChoice'
import UploadItem from '../components/uploadItem'

export default function Upload() {
  const [uploadList, setUploadList] = useState<any[]>([])

  useEffect(() => {
    const removeListener = window.bank.onProgress((e) => {
      setUploadList(e)
    })
    return () => removeListener()
  }, [])

  return (
    <div className="h-full">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="pt-8 px-4 shrink-0">
          <p className="text-center text-lg uppercase font-bold text-slate-600">Upload Files</p>
          <p className="text-center text-sm text-slate-500 mt-1">Upload you image to cdn.</p>
          <FileChoice />
        </div>
        <div className="text-slate-400 mt-7 grow flex flex-col overflow-scroll">
          <p className="text-sm px-4 text-slate-400">Uploaded Files</p>
          <div className="pb-9 px-4 overflow-scroll">
            <ul>
              {uploadList.map((item) => (
                <li className="mt-2">
                  <UploadItem data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
