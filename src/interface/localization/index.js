const path = require('path')
const { I18n } = require('i18n')

const i18n = new I18n()

i18n.configure({
  locales: ['en'],
  directory: path.join(__dirname, 'locales'),
  objectNotation: true
})

module.exports = i18n
