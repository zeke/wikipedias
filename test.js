const assert = require('assert')
const wikipedias = require('.')

describe('wikipedias', function () {
  it('is an object', function () {
    assert(wikipedias)
    assert.strictEqual(typeof wikipedias, 'object')
  })

  it('uses subdomains as object keys', function () {
    assert(wikipedias.en)
    assert.strictEqual(typeof wikipedias.en, 'object')
  })

  describe('each wikipedia', function () {
    it('has a code', function () {
      assert.strictEqual(wikipedias.de.code, 'de')
    })

    it('has a language', function () {
      assert.strictEqual(wikipedias.de.language, 'German')
    })

    it('has a script', function () {
      assert.strictEqual(wikipedias.de.script, 'Latn')
    })

    it('has a name', function () {
      assert.strictEqual(wikipedias.de.name, 'German Wikipedia')
    })

    it('has a size', function () {
      assert.strictEqual(Number(wikipedias.de.size), 6)
    })
  })
})
