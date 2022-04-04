/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 18:41:43
 * @Description: file content
 */
import React, { useMemo, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import LibarayIcon from '../components/libarayIcon'
import MenuItem from '../components/menuItem'
import Message from '../components/message'
import SettingIcon from '../components/settingIcon'
import UploadIcon from '../components/uploadIcon'
import Album from './album'
import Setting from './setting'
import Upload from './upload'
import langContext, { defaultLangData } from '../context/lang'
import langStorage from '../context/lang/langStorage'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = useState(location.pathname || '/')
  const [lang, setLang] = useState(langStorage.getLangCurrentData() || defaultLangData)
  const [langKey, setLangKey] = useState<string>(langStorage.getLangCurrent() || 'zh')

  const langProviderValue = useMemo(() => {
    return {
      lang,
      setLang,
      langKey,
      setLangKey
    }
  }, [lang, langKey])

  const handleChangePage = (_page: string) => {
    setPage(_page)
    navigate(_page)
  }

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <langContext.Provider value={langProviderValue}>
        <div className="h-9 shrink-0 bg-slate-200" id="title-bar" />
        <div className="flex grow overflow-hidden">
          <div className="w-56 p-5 pr-0 shrink-0">
            <ul>
              <li className="mb-2">
                <MenuItem
                  icon={
                    <UploadIcon
                      className={`${page === '/' ? 'fill-white' : 'fill-gray-400 group-hover:fill-gray-600'}`}
                    />
                  }
                  title={lang.MENU_ADD}
                  active={page === '/'}
                  onClick={() => handleChangePage('/')}
                />
              </li>
              <li className="mb-2">
                <MenuItem
                  icon={
                    <LibarayIcon
                      className={`${page === '/libaray' ? 'fill-white' : 'fill-gray-400 group-hover:fill-gray-600'}`}
                    />
                  }
                  title={lang.MENU_LIBARAY}
                  active={page === '/libaray'}
                  onClick={() => handleChangePage('/libaray')}
                />
              </li>
              <li className="mb-2">
                <MenuItem
                  icon={
                    <SettingIcon
                      className={`${page === '/setting' ? 'fill-white' : 'fill-gray-400 group-hover:fill-gray-600'}`}
                    />
                  }
                  title={lang.MENU_SETTING}
                  active={page === '/setting'}
                  onClick={() => handleChangePage('/setting')}
                />
              </li>
            </ul>
          </div>
          <div className="grow">
            <Routes>
              <Route path="/" element={<Upload />} />
              <Route path="/libaray" element={<Album />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
        <Message />
      </langContext.Provider>
    </div>
  )
}
