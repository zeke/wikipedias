# Wikipedia Edition Codes

> English-language representations of Wikidpedia's international subdomain codes.

Each Wikipedia has a code, which is used as a subdomain below wikipedia.org. Interlanguage links are sorted by that code. The codes represent the language codes defined by ISO 639-1 and ISO 639-3, and the decision of which language code to use is usually determined by the IETF language tag policy. For more details, see [en.wikipedia.org/wiki/List_of_Wikipedias](http://en.wikipedia.org/wiki/List_of_Wikipedias)

This node module exports a Javascript array of all of these codes. Here's a sample of the object format:

```js
[
  {"name":"English","script":"English","code":"en"},
  {"name":"German","script":"Latn","code":"de"},
  {"name":"French","script":"Latn","code":"fr"},
  {"name":"Dutch","script":"Latn","code":"nl"}
]
```

## Installation

```
npm install wikipedia-edition-codes --save
```

## Usage

```js
var codes = require('wikipedia-edition-codes');
```