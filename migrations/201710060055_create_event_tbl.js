'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Event',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(256),
          allowNull: true,
        },
        startAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        endAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        url: {
          type: Sequelize.STRING(256),
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
    return queryInterface.dropTable('Event')
  },
}
