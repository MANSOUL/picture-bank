/*
 * @Author: kuanggf
 * @Date: 2022-03-14 11:01:11
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-18 11:30:20
 * @Description: file content
 */
import React from 'react'

export default function CloseIcon() {
  return (
    <div title="Cancel" className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-300 cursor-pointer">
      <svg width="90%" height="90%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M14 14L34 34"
          className="stroke-slate-500"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 34L34 14"
          className="stroke-slate-500"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
