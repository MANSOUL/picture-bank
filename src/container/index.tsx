import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Album from './album'
import Upload from './upload'

export default function Layout() {
  return (
    <div className="w-full h-full flex bg-gray-100">
      <div className="w-44 shrink-0">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/">上传</Link>
          </li>
          <li>
            <Link to="/album">图库</Link>
          </li>
        </ul>
      </div>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </div>
    </div>
  )
}
