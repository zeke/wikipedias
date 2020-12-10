const fs = require('fs')
const path = require('path')
const wikipedias = module.exports = {}

JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'))).forEach(function (w) {
  wikipedias[w.code] = w
})
