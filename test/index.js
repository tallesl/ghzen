var assert = require('assert')
  , ghzen = require('../index')

it('should return a random zen', function () {
  var returned = [ ]

  // The number of zen times a thousand should be more than enough
  for (var i = 0; i < ghzen.zen.length * 1000; ++i) {
    var zen = ghzen.random()
    
    assert.ok(zen, "An empty value was returned")
    assert.strictEqual(typeof zen, 'string', "An non-string value returned")
    
    if (returned.indexOf(zen) < 0) returned.push(zen)
  }

  returned.sort()

  assert.ok(
    ghzen.zen.length == returned.length &&
    ghzen.zen.every(function (zen, i) {
      return zen == returned[i]
    }),
    "The arrays aren't equal")
})