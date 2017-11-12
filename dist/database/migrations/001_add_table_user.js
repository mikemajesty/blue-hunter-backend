"use strict";

exports.up = (knex, Promise) => {
	return Promise.all([knex.schema.createTableIfNotExists("user", table => {
		table.increments("id").unsigned().notNullable().primary();
		table.string("fullName", 120);
		table.enu('gender', ['male', 'female', 'other', 'unknown']);
		table.integer("age");
		table.string("email", 60);
		table.string("phone", 15);
		table.string("username", 40);
	})]);
};

exports.down = (knex, Promise) => {
	return Promise.all([knex.schema.dropTableIfExists("user")]);
};