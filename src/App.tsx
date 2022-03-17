/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-14 18:09:40
 * @Description: file content
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './container'

// drop 事件要在文档注册dragover事件才生效，说实话不知道为什么
document.body.addEventListener('dragover', (evt) => {
  evt.preventDefault()
})

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App
