/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 16:32:13
 * @Description: file content
 */
import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LibarayIcon from '../components/libarayIcon'
import MenuItem from '../components/menuItem'
import UploadIcon from '../components/uploadIcon'
import Album from './album'
import Upload from './upload'

export default function Layout() {
  const navigate = useNavigate()
  const [page, setPage] = useState('/')

  const handleChangePage = (_page: string) => {
    setPage(_page)
    navigate(_page)
  }

  return (
    <div className="w-full h-full flex bg-gray-100">
      <div className="w-56 p-5 pr-0 shrink-0">
        <ul>
          <li className="mb-2">
            <MenuItem
              icon={
                <UploadIcon className={`${page === '/' ? 'fill-white' : 'fill-gray-400 group-hover:fill-gray-600'}`} />
              }
              title="Add"
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
              title="Libaray"
              active={page === '/libaray'}
              onClick={() => handleChangePage('/libaray')}
            />
          </li>
        </ul>
      </div>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/libaray" element={<Album />} />
        </Routes>
      </div>
    </div>
  )
}