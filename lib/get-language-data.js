const CountryLanguage = require('country-language')
const IsoToLatLong = require('country-iso-to-coordinates')
const { promisify } = require('util')

async function getLanguageData (wikipediaLanguageCode) {
  // console.log('getLanguageData', { wikipediaLanguageCode })
  let language

  try {
    language = await promisify(CountryLanguage.getLanguage)(wikipediaLanguageCode)
  } catch {
    // console.log('no language found: ', wikipediaLanguageCode)
    return null
  }

  language.countries.forEach(country => {
    // console.log({country})
    country.coordinates = IsoToLatLong[country.code_2]?.coordinate
  })

  return language
}

module.exports = getLanguageData
