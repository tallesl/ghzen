#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
  , pkg = require('../package.json')
  , zen = require('../lib/zen')

if (argv.h || argv.help) console.log(pkg.description)
else if (argv.v || argv.version) console.log(pkg.version)
else if (argv.a || argv.all) zen.forEach(function(zen){ console.log(zen) })
else console.log(zen.random())

