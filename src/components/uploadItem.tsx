/*
 * @Author: kuanggf
 * @Date: 2022-03-14 12:02:44
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-05 15:50:06
 * @Description: file content
 */
import React from 'react'
import FileIcon from './fileIcon'
// import CloseIcon from './closeIcon'
import { getExtension } from '../utils'
import { useLang } from '../context/lang'

interface UploadItemProps {
  data: FileLikeUpload
}

export default function UploadItem({ data }: UploadItemProps) {
  const langContext = useLang()

  const handleCopyLink = () => {
    if (data.done && !data.fail) {
      window.bank.writeTextToClipboard(data.link)
      window.showMessage({
        type: 'success',
        message: langContext.lang.DESC_IMAGE_LINK_COPIED,
        visible: true
      })
    }
  }

  const progress = data.loaded / data.total
  const progressText = `${(progress * 100).toFixed(1)}%`
  const titleClassName = `text-sm ${data.fail ? 'text-rose-500' : 'text-black/70'} cursor-pointer`
  let titleDesc = ''
  if (data.done) titleDesc = langContext.lang.DESC_CLICK_COPY_IMAGE_LINK
  if (data.fail) titleDesc = langContext.lang.DESC_UPLOAD_FAIL
  return (
    <div className="flex items-center p-3 rounded hover:shadow-xl hover:shadow-indigo-500/20">
      <div className="shrink-0 w-8 h-10">
        <FileIcon type={getExtension(data.name)} />
      </div>
      <div className="grow mx-4">
        <div className="flex justify-between">
          <button onClick={handleCopyLink} className={titleClassName} title={titleDesc}>
            {data.name}
          </button>
          <span className="text-sm text-slate-400">{progressText}</span>
        </div>
        <div className="h-1 mt-2 rounded bg-slate-300">
          <div
            style={{ width: progressText }}
            className="h-full rounded overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>
      </div>
      <div className="shrink-0">{/* <CloseIcon /> */}</div>
    </div>
  )
}
