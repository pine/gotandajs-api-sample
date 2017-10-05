'use strict'

const { EventPlace } = require('@gotandajs/models')

exports.findByEvents = (events) => {
  const eventIds = events.map(event => event.id)
  return EventPlace.findAll({ where: { eventId: eventIds } })
}
