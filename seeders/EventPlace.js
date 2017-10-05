'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('EventPlace', [
      {
        id: 1,
        eventId: 1,
        placeId: 1,
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
      {
        id: 2,
        eventId: 2,
        placeId: 2,
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
    ])
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('EventPlace', null, {})
  },
}
