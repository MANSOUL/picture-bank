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
  icon?: PropTypes.ReactElementLike
  title: string
  active?: boolean
  onClick: React.MouseEventHandler
  bgColor?: string
  activeBgColor?: string
  size?: 'small' | 'medium'
}

export default function MenuItem({
  icon,
  title,
  active = false,
  onClick,
  bgColor = '',
  activeBgColor = 'bg-indigo-500',
  size = 'medium'
}: MenuItemProps) {
  const containerClassName = `w-full group ${
    size === 'small' ? 'p-1.5' : 'p-2'
  } rounded-md flex items-center justify-start cursor-pointer ${active ? activeBgColor : bgColor}`
  let titleClassName = `${size === 'small' ? 'text-sm' : 'text-md'} ${
    active ? 'text-white' : 'text-black/70  group-hover:text-black'
  }`
  if (icon) titleClassName += ' ml-3'

  return (
    <button className={containerClassName} onClick={onClick}>
      {icon ? <div className="w-6 h-6">{icon}</div> : null}
      <div className={titleClassName}>{title}</div>
    </button>
  )
}
