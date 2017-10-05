'use strict'

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST } =
  require('../packages/config')

module.exports = {
  development: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  },
}
