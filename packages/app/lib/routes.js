'use strict'

const healthcheck = require('./routes/healthcheck')
const event = require('./routes/event')

module.exports = (app) => {
  app.get('/healthcheck', healthcheck.get)
  app.get('/events', event.list)
}
