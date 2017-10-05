'use strict'

module.exports = (sequelize, DataTypes) =>
  sequelize.define('EventPlace', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    eventId: DataTypes.INTEGER,
    placeId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
      },
    },
    timestamps: true,
    freezeTableName: true,
  })
