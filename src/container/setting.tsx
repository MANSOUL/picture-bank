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
import createSettings from '../config/setting'

const PREFERENCE = 'PREFERENCE'

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [settings, setSettings] = useState<SettingMap>(new Map())
  const [settingKey, setSettingKey] = useState('')
  const [setting, setSetting] = useState<SettingObjectWithField[]>([])
  const [langsList, setLangsList] = useState<string[]>([])

  useEffect(() => {
    const removeListener = window.bank.onSetting((data) => {
      setSettings(data)
      if (activeIndex === 0) {
        const initialKey = Array.from(data.keys())[0]
        const initialValue = data.get(initialKey)
        if (initialValue) {
          setSettingKey(initialKey)
          setSetting(initialValue.setting)
        }
      }
    })
    const removeLangsListListener = window.bank.onLangsListChange((data) => {
      setLangsList(data)
    })
    const removeLangDataListener = window.bank.onLangDataChange((data) => {
      console.log(data)
    })
    return () => {
      removeListener()
      removeLangsListListener()
      removeLangDataListener()
    }
  }, [])

  const handleChangeSetting = (index: number, key: string) => {
    setActiveIndex(index)
    setSettingKey(key)
    if (key === PREFERENCE) {
      setSetting(createSettings(langsList))
    } else {
      setSetting(settings.get(key)?.setting || [])
    }
  }

  const handleApply = (data: { [k: string]: string }) => {
    if (settingKey === PREFERENCE) {
      window.bank.changeLang(data.lang)
    } else {
      window.bank.applySetting(settingKey, data)
    }
  }

  return (
    <div className="flex p-6">
      <div className="w-28 shrink-0 pt-4">
        <ul>
          <li className="mb-2" key="preference">
            <MenuItem
              title="偏好设置"
              active={activeIndex === -1}
              onClick={() => handleChangeSetting(-1, PREFERENCE)}
              activeBgColor="bg-slate-400"
              size="small"
            />
          </li>
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
        <SettingPanel key={settingKey} data={setting} onApply={handleApply} />
      </div>
    </div>
  )
}
