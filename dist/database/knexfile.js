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
    client: "postgresql",
    debug: false,
    connection: {
      host: 'ec2-23-21-220-32.compute-1.amazonaws.com',
      database: 'd19btf20pputht',
      user: 'viwaddnzjnbauj',
      password: 'd864ffb8b807e4345568e049e27c827a14169ea8ceeea7f2ac70b6fc06b43d91',
      port: 5432
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