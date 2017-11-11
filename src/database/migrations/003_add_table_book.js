exports.up = function (knex, Promise) {
	return Promise.all([
		knex.schema.createTableIfNotExists("book", function (table) {
			table.increments("id").unsigned().notNullable().primary();
			table.string("title", 120);
			table.integer("authorId").unsigned().nullable().references("id").inTable("author");
			table.integer("yearPublished");
			table.decimal("price");
			table.string("rating");
		})
	]);
};

exports.down = function (knex, Promise) {
	return Promise.all([
		knex.schema.dropTableIfExists("book")
	]);
};