/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-05 15:40:54
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import Empty from '../components/empty'
import FileChoice from '../components/fileChoice'
import UploadItem from '../components/uploadItem'
import { useLang } from '../context/lang'
import { db } from '../db'

export default function Upload() {
  const [uploadList, setUploadList] = useState<FileLikeUpload[]>([])
  const langContext = useLang()

  useEffect(() => {
    const removeListener = window.bank.onProgress((e) => {
      setUploadList(e)
      e.forEach((file) => {
        if (file.done) {
          db.pictures.add({
            localAbsolutePath: file.path,
            remotePath: file.link,
            fileName: file.name,
            size: file.total,
            width: file.w,
            height: file.h,
            uploading: 0,
            uploaded: 1,
            createdTime: Date.now(),
            remoteSource: 'qiniu',
            removeSourceName: '七牛云'
          })
        }
        // else if (file.fail) {

        // }
      })
    })
    const removeUploadListListener = window.bank.onUploadList((data) => {
      setUploadList(data)
    })
    return () => {
      removeListener()
      removeUploadListListener()
    }
  }, [])

  const handleUpload = async (files: FileLike[]) => {
    const selects = files.map((item) => {
      return db.pictures
        .where({
          localAbsolutePath: item.path,
          uploaded: 1
        })
        .first()
    })
    try {
      const result = await Promise.allSettled(selects)
      const exists = result.filter((item) => item.status === 'fulfilled' && item.value)
      const waitToUploadFiles = files.filter((file) => {
        if (exists.some((item) => item.status === 'fulfilled' && item.value?.localAbsolutePath === file.path)) {
          window.showMessage({
            message: `${file.name}已上传`,
            visible: true
          })
          return false
        }
        return true
      })
      console.log('等待上传的文件:', waitToUploadFiles)
      window.bank.upload(waitToUploadFiles)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-full">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="pt-8 px-4 shrink-0">
          <p className="text-center text-lg uppercase font-bold text-slate-600">
            {langContext.lang.TITLE_UPLOAD_FILES}
          </p>
          <p className="text-center text-sm text-slate-500 mt-1">{langContext.lang.DESC_UPLOAD}</p>
          <FileChoice onUpload={handleUpload} />
        </div>
        <div className="text-slate-400 mt-7 grow flex flex-col overflow-scroll">
          <p className="text-sm px-4 text-slate-400">{langContext.lang.TITLE_UPLOADED_FILES}</p>
          {uploadList.length > 0 ? (
            <div className="pb-9 px-4 overflow-scroll">
              <ul>
                {uploadList.map((item) => (
                  <li key={item.path} className="mt-2">
                    <UploadItem data={item} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {uploadList.length === 0 ? <Empty size="small" /> : null}
        </div>
      </div>
    </div>
  )
}
