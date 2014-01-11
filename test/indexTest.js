var assert = require('assert');
var wikipedias = require('..');

describe('wikipedias', function () {

  it('is an object', function() {
    assert(wikipedias)
    assert.equal(typeof wikipedias, "object")
  });

  it('uses subdomains as object keys', function() {
    assert(wikipedias.en)
    assert.equal(typeof wikipedias.en, "object")
  });

  describe('each wikipedia', function() {

    it('has a code', function() {
      assert.equal(wikipedias.de.code, "de")
    });

    it('has a language', function() {
      assert.equal(wikipedias.de.language, "German")
    });

    it('has a script', function() {
      assert.equal(wikipedias.de.script, "Latn")
    });

    it('has a name', function() {
      assert.equal(wikipedias.de.name, "German Wikipedia")
    });

    it('has a size', function() {
      assert.equal(wikipedias.de.size, 6)
    });

  })


});





