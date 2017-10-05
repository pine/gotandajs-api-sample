'use strict'

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
    url: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
      },
    },
    timestamps: true,
    freezeTableName: true,
  })
