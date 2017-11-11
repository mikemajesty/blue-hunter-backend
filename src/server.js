import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from './database/knexfile';

const app = express();

app.use('/', express.static(path.join(__dirname, '../')));

const knex = new Knex(knexConfig.development);

knex.migrate.latest()
  .then(() => {
    return knex.seed.run();
  });

Model.knex(knex);

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});