'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  development: {
    client: "postgresql",
    debug: false,
    connection: {
      host: 'localhost',
      database: 'bluehunter-db',
      user: 'postgres',
      password: '123456'
    },
    pool: {
      min: 1,
      max: 50
    },
    migrations: {
      tableName: "migrations",
      directory: _path2.default.join(__dirname, '/migrations')
    },
    seeds: {
      directory: _path2.default.join(__dirname, '/seeds')
    }
  },
  production: {
    client: process.env.CLIENT_NAME,
    debug: false,
    connection: {
      host: process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      port: process.env.DATABSE_PORT
    },
    pool: {
      min: 1,
      max: 50
    },
    migrations: {
      tableName: "migrations",
      directory: _path2.default.join(__dirname, '/migrations')
    },
    seeds: {
      directory: _path2.default.join(__dirname, '/seeds')
    }
  }
};