/*
 * @Author: kuanggf
 * @Date: 2022-03-14 14:33:30
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 14:36:42
 * @Description: file content
 */
import React from 'react'

interface LibarayIconProps {
  className: string
}

export default function LibarayIcon({ className }: LibarayIconProps) {
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          className={className}
          d="M844.8 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 864 864 883.2 844.8 883.2zM844.8 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C883.2 460.8 864 480 844.8 480zM435.2 883.2l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 864 460.8 883.2 435.2 883.2zM435.2 480l-256 0c-19.2 0-38.4-19.2-38.4-38.4l0-256c0-19.2 19.2-38.4 38.4-38.4l256 0c19.2 0 38.4 19.2 38.4 38.4l0 256C480 460.8 460.8 480 435.2 480z"
          p-id="9070"
        />
      </svg>
    </div>
  )
}
