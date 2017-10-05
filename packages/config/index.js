'use strict'

const { join } = require('path')
const dotenv = require('dotenv')

const { NODE_ENV, PROJECT_DIR } = require('@gotandajs/env')

// ----------------------------------------------------------------------------

dotenv.config({ path: join(PROJECT_DIR, `.env.${NODE_ENV}`) })

;[
  'APP_PORT',
  'APP_HOST',

  'MYSQL_USERNAME',
  'MYSQL_PASSWORD',
  'MYSQL_DATABASE',
  'MYSQL_HOST',
]
  .forEach(key => {
    module.exports[key] = process.env[key]
  })
