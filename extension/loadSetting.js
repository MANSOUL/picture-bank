module.exports = function readSetting(extension) {
  const package = require(`./installed/${extension}/package.json`)

  process.send({
    type: 'setting',
    data: {
      extension,
      extensionDisplayName: package.displayName,
      setting: package.setting
    }
  })
}