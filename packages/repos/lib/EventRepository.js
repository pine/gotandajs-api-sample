'use strict'

const { Event } = require('@gotandajs/models')

exports.findAll = () => {
  return Event.findAll()
}
