/*
 * @Author: kuanggf
 * @Date: 2022-03-15 12:18:55
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-15 16:37:42
 * @Description: file content
 */
const EventEmitter = require('events')
const loadExtension = require('./loadExtension')
const loadSetting = require('./loadSetting')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('progress', (data) => {
  process.send({
    type: 'progress',
    data
  })
})

process.on('message', (data) => {
  if (data.type === 'upload') {
    myEmitter.emit('upload', data.data)
  }
  if (data.type === 'setting') {
    const { extension, setting } = data.data
    loadSetting.mergeValueToSetting(extension, setting)
  }
})

loadExtension('qiniu', myEmitter)
loadSetting.readSetting('qiniu')
