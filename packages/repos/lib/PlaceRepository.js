'use strict'

const { Place } = require('@gotandajs/models')

exports.findByEventPlaces = (eventPlaces) => {
  const placeIds = eventPlaces.map(eventPlace => eventPlace.placeId)
  return Place.findAll({ where: { id: placeIds } })
}
