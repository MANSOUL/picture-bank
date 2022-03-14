/*
 * @Author: kuanggf
 * @Date: 2022-03-14 10:08:03
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 13:47:08
 * @Description: file content
 */
import React from 'react'

interface IconProps {
  type: string
  backgroundColor?: string
}

export default function FileIcon({ type, backgroundColor = 'rgba(99, 102, 241, 1)' }: IconProps) {
  return (
    <div
      className="w-8 h-10 rounded flex items-center justify-center relative"
      style={{ backgroundColor, clipPath: 'polygon(0 0, 1.375rem 0, 100% .625rem, 100% 100%, 0 100%)' }}
    >
      <i className="absolute w-2.5 h-2.5 rounded-bl top-0 right-0 bg-white/50" />
      <div className="text-xs text-white/60 uppercase select-none scale-75">{type}</div>
    </div>
  )
}
