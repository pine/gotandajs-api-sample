'use strict'

const _ = require('lodash')

class EventResult {
  constructor({ events, eventPlaces, places }) {
    this.events = events
    this.eventPlaces = eventPlaces
    this.places = places
  }

  serialize() {
    const placeIdToPlace = _(this.places)
      .map(place => [
        place.id,
        _.pick(place, [ 'id', 'name', 'address' ])
      ])
      .fromPairs()
      .value()

    const eventIdToPlace = _(this.eventPlaces)
      .map(eventPlace => [ eventPlace.eventId, placeIdToPlace[eventPlace.placeId] ])
      .fromPairs()
      .value()

    return _(this.events)
      .map(event => _.assign(event, { place: eventIdToPlace[event.id] }))
      .map(event => _.pick(event, [ 'id', 'name', 'description', 'startAt', 'endAt', 'url', 'place' ]))
      .values()
  }
}

module.exports = EventResult
