'use strict'

const fs = require('fs')
const { join } = require('path')

const _ = require('lodash')


module.exports = _(fs.readdirSync(join(__dirname, 'lib')))
  .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .map(file => [
    file.slice(0, -3),
    require(join(__dirname, 'lib', file)),
  ])
  .fromPairs()
  .value()
