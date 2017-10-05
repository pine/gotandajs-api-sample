'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const errorhandler = require('errorhandler')
const morgan = require('morgan')

const { NODE_ENV } = require('@gotandajs/env')

// ----------------------------------------------------------------------------

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (NODE_ENV === 'development') {
  app.use(errorhandler({ log: true }))
}

module.exports = app
