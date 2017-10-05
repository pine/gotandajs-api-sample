'use strict'

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Place', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
      },
    },
    timestamps: true,
    freezeTableName: true,
  })
