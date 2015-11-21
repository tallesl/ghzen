var assert = require('assert')
  , zen = require('../lib/zen')

it('should return a random zen', function () {
  var random = [ ]

  // The number of zen times a thousand should be more than enough
  for (var i = 0; i < zen.length * 1000; ++i) {
    var current = zen.random()

    assert.ok(current, 'An empty value was returned')
    assert.strictEqual(typeof current, 'string', 'An non-string value returned')

    if (random.indexOf(current) < 0) random.push(current)
  }

  random.sort()
  zen.sort()

  assert.strictEqual(zen.length, random.length, 'The array have different sizes')
  assert.strictEqual(JSON.stringify(zen), JSON.stringify(random), 'The arrays aren\'t equal')
})
