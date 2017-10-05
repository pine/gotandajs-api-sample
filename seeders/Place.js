'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Place', [
      {
        id: 1,
        name: '株式会社モバイルファクトリー',
        address: '東京都品川区東五反田1-24-2',
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
      {
        id: 2,
        name: 'ぼたん',
        address: '東京都品川区東五反田1-24-17',
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
    ])
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Place', null, {})
  },
}
