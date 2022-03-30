/*
 * @Author: kuanggf
 * @Date: 2022-03-26 17:43:39
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-26 17:43:39
 * @Description: file content
 */
import React, { useEffect } from 'react'

export default function Setting() {
  useEffect(() => {
    const removeListener = window.bank.onSetting((data) => {
      console.log(data)
    })
    return () => removeListener()
  }, [])

  return <div>setting</div>
}
