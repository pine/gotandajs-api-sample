'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Place',
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
        address: {
          type: Sequelize.STRING(256),
          allowNull: true,
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
    return queryInterface.dropTable('Place')
  },
}
