const fs = require('fs')

const settingPath = './extension/setting.json'

function protectSettingFile() {
  if (!fs.existsSync(settingPath)) {
    fs.writeFileSync(settingPath, JSON.stringify({}))
  }
}

function writeSettingToFile(jsonSetting) {
  protectSettingFile()
  fs.writeFileSync(settingPath, jsonSetting)
}

function readSettingFromFile() {
  protectSettingFile()
  return JSON.parse(fs.readFileSync(settingPath))
}

function mergeValueToSetting(extension, setting) {
  const settingJson = readSettingFromFile()
  const extensionSetting = settingJson[extension]
  extensionSetting.setting.forEach(item => {
    item.value = setting[item.key]
  })
  applySettingToFile(extension, extensionSetting.setting)
}

function applySettingToFile(extension, setting, extensionDisplayName) {
  // 将新的配置项写入文件
  let settingJson = readSettingFromFile()
  if (!settingJson[extension]) settingJson[extension] = {}
  settingJson[extension].setting = setting
  if (extensionDisplayName) settingJson[extension].extensionDisplayName = extensionDisplayName
  writeSettingToFile(JSON.stringify(settingJson))
  // 读取新的配置项
  settingJson = readSettingFromFile()
  const extensionSetting = settingJson[extension]
  // 将新的配置项送回renderer
  process.send({
    type: 'setting',
    data: {
      extension,
      extensionDisplayName: extensionSetting.extensionDisplayName,
      setting: extensionSetting.setting
    }
  })
}

function readSetting(extension) {
  const package = require(`./installed/${extension}/package.json`)
  // 写入到文件中
  applySettingToFile(extension, package.setting, package.displayName)
}

module.exports = {
  readSetting,
  mergeValueToSetting
}