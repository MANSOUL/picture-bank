/*
 * @Author: kuanggf
 * @Date: 2022-03-20 17:05:04
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-20 17:07:53
 * @Description: file content
 */
import React from 'react'

interface CompleteIconProps {
  color?: string
}

export default function CompleteIcon({ color = '#fff' }: CompleteIconProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg
        width="100%"
        height="100%"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M280.512 446.496a37.344 37.344 0 0 0-52.8 52.8l198.016 197.984a37.248 37.248 0 0 0 52.8 0l317.888-317.888a37.344 37.344 0 0 0-52.8-52.8l-291.488 291.488-171.616-171.616z"
          fill={color}
        />
      </svg>
    </div>
  )
}
