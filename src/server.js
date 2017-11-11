import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from './database/knexfile';
import router from './services/baseRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../')));

const knex = process.env.ENV === 'production' ?
  new Knex(knexConfig.production) : new Knex(knexConfig.development);

knex.migrate.latest()
  .then(() => knex.seed.run());

Model.knex(knex);

const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => console.log(`Server Running on ${ PORT }`));