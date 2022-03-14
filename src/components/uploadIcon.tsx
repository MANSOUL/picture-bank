/*
 * @Author: kuanggf
 * @Date: 2022-03-14 14:13:14
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 14:20:46
 * @Description: file content
 */
import React from 'react'

interface UploadIconProps {
  className: string
}

export default function UploadIcon({ className }: UploadIconProps) {
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M796.2 466.4c0-2.4 0.4-4.8 0.4-7.2 0-130-103.6-235.2-231.4-235.2-92.2 0-171.4 54.8-208.6 134-16.2-8.2-34.4-13-53.6-13-59 0-108.2 43.8-117.6 101C114.6 470.4 64 538.2 64 618c0 100.4 80.2 182 179 182L448 800l0-160-96.4 0 160.4-167.4 160.4 167.2-96.4 0 0 160 220.6 0c90.4 0 163.4-75 163.4-166.8C960 541.2 886.6 466.6 796.2 466.4z"
          p-id="1288"
          className={className}
        />
      </svg>
    </div>
  )
}
