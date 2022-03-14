/*
 * @Author: kuanggf
 * @Date: 2022-03-14 15:20:47
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 15:48:07
 * @Description: file content
 */
import React from 'react'
import PropTypes from 'prop-types'

interface MenuItemProps {
  icon: PropTypes.ReactElementLike
  title: string
  active: boolean
  onClick: React.MouseEventHandler
}

export default function MenuItem({ icon, title, active, onClick }: MenuItemProps) {
  const containerClassName = `w-full group p-2 rounded-md flex items-center justify-start cursor-pointer ${
    active ? 'bg-indigo-500' : ''
  }`
  const titleClassName = `text-md ${active ? 'text-white' : 'text-black/70  group-hover:text-black'} ml-3`
  return (
    <button className={containerClassName} onClick={onClick}>
      <div className="w-6 h-6">{icon}</div>
      <div className={titleClassName}>{title}</div>
    </button>
  )
}
