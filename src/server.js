import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import {
  Model
} from 'objection';
import Knex from 'knex';
import knexConfig from './database/knexfile';
import routes from './services/baseRoutes';

const app = express();

app.use(bodyParser.json());

const knex = process.env.ENV === 'production' ?
  new Knex(knexConfig.production) : new Knex(knexConfig.development);

knex.migrate.latest()
  .then(() => knex.seed.run());

Model.knex(knex);

const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log('==============DATA BASE==========================');
  console.log('HOST', process.env.HOST);
  console.log('DATABASE', process.env.DATABASE);
  console.log('USER_NAME', process.env.USER_NAME);
  console.log('PASSWORD', process.env.PASSWORD);
  console.log('DATABSE_PORT', process.env.DATABSE_PORT);
  console.log('==============SERVER=============================');
  console.log(`Server Running on ${ PORT }`)
});