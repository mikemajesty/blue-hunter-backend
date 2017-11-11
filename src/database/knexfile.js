const path = require('path');

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
      directory: path.join(__dirname, '/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/seeds')
    }
  }
};