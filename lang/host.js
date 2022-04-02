const fs = require('fs')
const path = require('path')

const LANG_LIST_PATH = path.resolve(__dirname, './installed')

function getLangList() {
  const list = fs.readdirSync(LANG_LIST_PATH)
  return list.map(item => {
    return item.split('.')[0]
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
  const langJsonData = fs.readFileSync(path.resolve(LANG_LIST_PATH, `${lang}.json`)).toString()
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