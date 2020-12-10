const entries = require('../data.json')
const fs = require('fs')
const path = require('path')
const getLanguageData = require('../lib/get-language-data')

async function main () {
  for (const entry of entries) {
    entry.languageData = await getLanguageData(entry.code)
  }

  const wikipedias = entries
    .reduce((acc, current) => {
      acc[current.code] = current
      return acc
    }, {})

  fs.writeFileSync(
    path.join(__dirname, '../index.json'),
    JSON.stringify(wikipedias, null, 2)
  )
}

main()
