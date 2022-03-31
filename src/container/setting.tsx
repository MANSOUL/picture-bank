/*
 * @Author: kuanggf
 * @Date: 2022-03-26 17:43:39
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-26 17:43:39
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import MenuItem from '../components/menuItem'
import SettingPanel from '../components/settingPanel'

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [settings, setSettings] = useState<SettingMap>(new Map())
  const [setting, setSetting] = useState<SettingObject[]>([])

  useEffect(() => {
    const removeListener = window.bank.onSetting((data) => {
      console.log(data)
      setSettings(data)
      if (activeIndex === 0) {
        setSetting(Array.from(data.values())[0].setting)
      }
    })
    return () => removeListener()
  }, [])

  const handleChangeSetting = (index: number, key: string) => {
    setActiveIndex(index)
    setSetting(settings.get(key)?.setting || [])
  }

  return (
    <div className="flex p-6">
      <div className="w-28 shrink-0 pt-4">
        <ul>
          {Array.from(settings.entries()).map((item, index) => (
            <li className="mb-2" key={item[0]}>
              <MenuItem
                title={item[1].extensionDisplayName}
                active={index === activeIndex}
                onClick={() => handleChangeSetting(index, item[0])}
                activeBgColor="bg-slate-400"
                size="small"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="grow">
        <SettingPanel data={setting} />
      </div>
    </div>
  )
}
