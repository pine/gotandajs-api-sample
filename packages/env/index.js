'use strict'

const assert = require('assert')
const { join, resolve } = require('path')

const _ = require('lodash')

// ----------------------------------------------------------------------------

const NODE_ENV = _.size(process.env.NODE_ENV) > 0 ?
  process.env.NODE_ENV : 'development'

if (!['development', 'production', 'test'].includes(NODE_ENV)) {
  throw new Error(`invalid NODE_ENV --> ${NODE_ENV}`)
}

const PROJECT_DIR = resolve(join(__dirname, '../../'))

// ----------------------------------------------------------------------------

module.exports = {
  NODE_ENV,
  PROJECT_DIR,
}
