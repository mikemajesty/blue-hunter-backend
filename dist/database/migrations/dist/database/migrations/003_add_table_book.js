"use strict";

exports.up = (knex, Promise) => {
	return Promise.all([knex.schema.createTableIfNotExists("book", table => {
		table.increments("id").unsigned().notNullable().primary();
		table.string("title", 120);
		table.integer("authorId").unsigned().nullable().references("id").inTable("author");
		table.integer("yearPublished");
		table.decimal("price");
		table.string("rating");
	})]);
};

exports.down = (knex, Promise) => {
	return Promise.all([knex.schema.dropTableIfExists("book")]);
};