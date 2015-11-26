#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
  , pkg = require('./package.json')
  , zen = require('./zen')

if (argv.h || argv.help) console.log(pkg.description)
else if (argv.v || argv.version) console.log(pkg.version)
else if (argv.a || argv.all) zen.forEach(zen => console.log(zen))
else console.log(zen[Math.floor(Math.random() * zen.length)])
