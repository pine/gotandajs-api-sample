'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'EventPlace',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        eventId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        placeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        engine: 'InnoDB',
        charset: 'utf8mb4',
      }
    )
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('EventPlace')
  },
}
