import path from 'path';

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
      directory: path.join(__dirname, '/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/seeds')
    }
  }
};