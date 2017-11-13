"use strict";

exports.up = knex => {
  return Promise.all([knex.schema.alterTable("book", table => {
    table.string("img", 250);
  })]);
};

exports.down = knex => {
  return Promise.all([]);
};