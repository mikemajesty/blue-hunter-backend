exports.up = (knex, Promise) => {
	return Promise.all([
		knex.schema.createTableIfNotExists("author", (table) => {
			table.increments("id").unsigned().notNullable().primary();
			table.string("name", 120);
			table.enu('gender', ['male', 'female', 'other', 'unknown']);
			table.integer("age");
			table.string("country", 40);
		})
	]);
};

exports.down = (knex, Promise) => {
	return Promise.all([
		knex.schema.dropTableIfExists("author")
	]);
};



