/*
 * @Author: kuanggf
 * @Date: 2022-03-25 13:46:09
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 17:24:52
 * @Description: file content
 */
import React from 'react'
import EmptyIcon from './emptyIcon'

interface EmptyProps {
  size?: 'small' | 'medium'
}

export default function Empty({ size = 'medium' }: EmptyProps) {
  let wrapperClassName = 'mx-auto mt-10'
  let className = ''
  let textClassName = 'text-center'

  if (size === 'small') {
    wrapperClassName += ' w-14'
    className = 'w-14 h-14'
    textClassName += ' text-xs'
  }

  if (size === 'medium') {
    wrapperClassName += ' w-16'
    className = 'w-16 h-16'
    textClassName += ' text-sm'
  }

  return (
    <div className={wrapperClassName}>
      <div className={className}>
        <EmptyIcon color="rgba(148, 163, 184)" />
      </div>
      <div className={textClassName} style={{ color: 'rgb(148, 163, 184)' }}>
        Empty
      </div>
    </div>
  )
}
