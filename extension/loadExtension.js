module.exports = function loadExtension(extension, emitter) {
  const run = require(`./installed/${extension}`)
  run(emitter)
}