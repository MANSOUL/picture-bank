/*
 * @Author: kuanggf
 * @Date: 2022-03-20 16:52:42
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 11:40:32
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import CompleteIcon from './completeIcon'
import ErrorIcon from './errorIcon'
import InfoIcon from './infoIcon'

export default function Message() {
  const [message, setMessage] = useState<MessageInfo>({
    visible: false,
    type: 'success',
    message: '',
    duration: 3000
  })

  useEffect(() => {
    let timer = -1
    window.showMessage = (info: MessageInfo) => {
      const nextMessage = {
        duration: 3000,
        ...info
      }
      if (!nextMessage.type) nextMessage.type = 'info'
      setMessage(nextMessage)
      if (nextMessage.visible) {
        timer = window.setTimeout(() => {
          setMessage({
            ...nextMessage,
            visible: false
          })
        }, nextMessage.duration)
      }
    }
    return () => {
      clearTimeout(timer)
    }
  }, [])

  let icon = <InfoIcon color="text-black/70" />
  let className = 'flex items-center select-none text-sm p-2 pr-3 rounded-sm shadow-lg shadow-black-500/80'
  let wrapperClassName = 'fixed top-14 right-0 pr-8 transition-transform'

  if (message.type === 'error') {
    icon = <ErrorIcon />
    className += ' bg-rose-500 text-white'
  } else if (message.type === 'success') {
    icon = <CompleteIcon />
    className += ' bg-green-500 text-white'
  } else {
    className += ' bg-white text-black/70'
  }

  if (message.visible) {
    wrapperClassName += ''
  } else {
    wrapperClassName += ' translate-x-full'
  }

  return (
    <div className={wrapperClassName}>
      <div className={className}>
        <div className="w-6 h-6">{icon}</div>
        <div className="ml-1">{message.message}</div>
      </div>
    </div>
  )
}
