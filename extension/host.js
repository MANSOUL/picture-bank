/*
 * @Author: kuanggf
 * @Date: 2022-03-15 12:18:55
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-05 15:33:57
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

myEmitter.on('tip', (data) =>  {
  process.send({
    type: 'tip',
    data
  })
})

myEmitter.on('uploadList', (data) => {
  process.send({
    type: 'uploadList',
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
  if (data.type === 'getUploadList') {
    myEmitter.emit('getUploadList')
  }
})

loadExtension('qiniu', myEmitter)
loadSetting.readSetting('qiniu', myEmitter)
loadSetting.addGetSettingToEmitter(myEmitter)