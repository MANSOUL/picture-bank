/*
 * @Author: kuanggf
 * @Date: 2022-03-20 16:52:42
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 11:40:32
 * @Description: file content
 */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CompleteIcon from './completeIcon'
import ErrorIcon from './errorIcon'
import InfoIcon from './infoIcon'

interface MessageInfoQueueItem extends MessageInfo {
  id: string
}

interface MessageProps {
  message: MessageInfoQueueItem
  onDisappear(is: string): void
}

function Message({ message, onDisappear }: MessageProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false)
      setTimeout(() => onDisappear(message.id), 500)
    }, message.duration)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useLayoutEffect(() => {
    setTimeout(() => setVisible(true))
  }, [])

  let icon = <InfoIcon color="text-black/70" />
  let className = 'flex items-center select-none text-sm p-2 pr-3 rounded-sm shadow-lg shadow-black-500/80'
  let wrapperClassName = 'pr-8 mb-2 transition-transform'

  if (message.type === 'error') {
    icon = <ErrorIcon />
    className += ' bg-rose-500 text-white'
  } else if (message.type === 'success') {
    icon = <CompleteIcon />
    className += ' bg-green-500 text-white'
  } else {
    className += ' bg-white text-black/70'
  }

  if (visible) {
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

let queueCopy: MessageInfoQueueItem[] = []
export default function MessageQueue() {
  const [queue, setQueue] = useState<MessageInfoQueueItem[]>([])

  useEffect(() => {
    window.showMessage = (info: MessageInfo) => {
      const nextMessage: MessageInfoQueueItem = {
        id: `${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        duration: 3000,
        ...info
      }
      if (!nextMessage.type) nextMessage.type = 'info'
      setQueue((_queue) => [..._queue, nextMessage])
      queueCopy = [...queueCopy, nextMessage]
    }
  }, [])

  const handleDisappear = (id: string) => {
    queueCopy = queueCopy.filter((item) => item.id !== id)
    if (queueCopy.length === 0) setQueue([])
  }

  let queueClassName = 'fixed top-14 right-0 transition-transform'
  if (queue.length > 0) {
    queueClassName += ''
  } else {
    queueClassName += ' translate-x-full'
  }
  return (
    <div className={queueClassName}>
      {queue.map((item) => (
        <Message key={item.id} message={item} onDisappear={handleDisappear} />
      ))}
    </div>
  )
}
