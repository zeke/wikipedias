# Wikipedias

wikipedias is a node module containing metadata about Wikidpedia's international subdomain codes. The data was scraped from [List_of_Wikipedias#List](http://en.wikipedia.org/wiki/List_of_Wikipedias#List). It was created as a dependency of [Ord](http://ord.zeke.sikelianos.com/), a node app that uses Wikipedia to translate words into many languages.

## Installation

```
npm install wikipedias --save
```

## Usage

```js
var wikipedias = require('wikipedias');
console.log(wikipedias);

{
  en: {
    code: 'en',
    language: 'English',
    script: 'English',
    name: 'English Wikipedia',
    size: '6'
  },
  de: {
    code: 'de',
    language: 'German',
    script: 'Latn',
    name: 'German Wikipedia',
    size: '6'
  },
  fr: {
    code: 'fr',
    language: 'French',
    script: 'Latn',
    name: 'French Wikipedia',
    size: '6'
  },
}

```

## Tests

```
npm test

wikipedias
  ✓ is an object
  ✓ uses subdomains as object keys
  each wikipedia
    ✓ has a code
    ✓ has a language
    ✓ has a script
    ✓ has a name
    ✓ has a size
```
