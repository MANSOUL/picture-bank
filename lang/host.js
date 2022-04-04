/*
 * @Author: kuanggf
 * @Date: 2022-04-04 10:40:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-04-04 11:21:03
 * @Description: file content
 */
const fs = require('fs')
const path = require('path')

const LANG_LIST_PATH = path.resolve(__dirname, './installed')

function getLangList() {
  const list = fs.readdirSync(LANG_LIST_PATH)
  return list.map(item => {
    const package = require(path.resolve(LANG_LIST_PATH, item, 'package.json'))
    return {
      displayName: package.displayName,
      value: package.key
    }
  })
}

function notifyLangsChange() {
  const langs = getLangList()
  process.send({
    type: 'langsList',
    data: langs
  })
}

function sendLang(lang) {
  const langJsonData = fs.readFileSync(path.resolve(LANG_LIST_PATH, lang, `${lang}.json`)).toString()
  process.send({
    type: 'langData',
    data: {
      lang,
      langJsonData
    }
  })
}

function onLangsChange() {
  process.on('message', (data) => {
    if (data.type === 'langListChange') {
      notifyLangsChange()
    }
    if (data.type === 'langChange') {
      sendLang(data.lang)
    }
  })
}

function main() {
  onLangsChange()
  notifyLangsChange()
}

main()