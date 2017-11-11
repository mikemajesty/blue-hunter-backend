const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const Model = require('objection').Model;
const Knex = require('knex');
const knexConfig = require('./database/knexfile');

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