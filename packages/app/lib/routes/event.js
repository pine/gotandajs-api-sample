'use strict'

const {
  EventRepository,
  EventPlaceRepository,
  PlaceRepository,
} = require('@gotandajs/repos')
const { EventResult } = require('@gotandajs/models')

exports.list = async (req, res) => {
  const events = await EventRepository.findAll()
  const eventPlaces = await EventPlaceRepository.findByEvents(events)
  const places = await PlaceRepository.findByEventPlaces(eventPlaces)
  const result = new EventResult({ events, eventPlaces, places })
  res.json(result.serialize())
}
