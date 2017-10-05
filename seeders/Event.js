'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Event', [
      {
        id: 1,
        name: 'Gotanda.js #1 in Mobile Factory',
        description: '五反田や沖縄で JavaScript の勉強をします。第1回は五反田で開催!!',
        startAt: '2015-10-28 19:30:00',
        endAt: '2015-10-28 21:00:00',
        url: 'https://gotandajs.connpass.com/event/20838/',
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
      {
        id: 2,
        name: 'Gotanda.js #1 in Mobile Factory 懇親会',
        description: 'こちらは懇親会の申し込みとなっています。イベントに別途申し込みが必要です。',
        startAt: '2015-10-28 21:10:00',
        endAt: '2015-10-28 23:10:00',
        url: 'https://gotandajs.connpass.com/event/21724/',
        createdAt: '2017-10-06 00:00:00',
        updatedAt: '2017-10-06 00:00:00',
      },
    ])
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Event', null, {})
  },
}
