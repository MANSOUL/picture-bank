/*
 * @Author: kuanggf
 * @Date: 2022-03-20 17:05:04
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-20 18:04:42
 * @Description: file content
 */
import React from 'react'

interface InfoIconProps {
  color?: string
}

export default function InfoIcon({ color = '#fff' }: InfoIconProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <path
          fill={color}
          d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"
        />
      </svg>
    </div>
  )
}
