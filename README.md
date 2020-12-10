# Wikipedias

This a Node.js module containing metadata about Wikidpedia's international subdomain codes. The data was scraped from [List_of_Wikipedias#List](http://en.wikipedia.org/wiki/List_of_Wikipedias#List). It was created as a dependency of [Ord](http://ord.zeke.sikelianos.com/), a node app that uses Wikipedia to translate words into many languages.

## Installation

```
npm install wikipedias
```

## Usage

```js
const wikipedias = require('wikipedias')
console.log(wikipedias)

{
  en: {
    code: 'en',
    language: 'English',
    languageData: {},
    script: 'English',
    name: 'English Wikipedia',
    size: '6'
  },
  de: {
    code: 'de',
    language: 'German',
    languageData: {},
    script: 'Latn',
    name: 'German Wikipedia',
    size: '6'
  },
  fr: {
    code: 'fr',
    language: 'French',
    languageData: {},
    script: 'Latn',
    name: 'French Wikipedia',
    size: '6'
  },
}
```

Most entries also include a `languageData` object containing additional metadata about the language, including:

- native name of the language, like 'Deutsch' for 'German'
- countries where the language is officially spoken
- geocoordinates of those countries (latitude and longitude)

See [index.json](index.json).