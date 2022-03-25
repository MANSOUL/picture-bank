/*
 * @Author: kuanggf
 * @Date: 2022-03-25 13:46:09
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 13:54:52
 * @Description: file content
 */
import React from 'react'
import EmptyIcon from './emptyIcon'

export default function Empty() {
  return (
    <div className="w-16 mx-auto mt-10">
      <div className="w-16 h-16">
        <EmptyIcon color="rgba(148, 163, 184)" />
      </div>
      <div className="text-sm text-center" style={{ color: 'rgb(148, 163, 184)' }}>
        Empty
      </div>
    </div>
  )
}
