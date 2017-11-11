exports.up = function (knex, Promise) {
	return Promise.all([
		knex.schema.createTableIfNotExists("user", function (table) {
			table.increments("id").unsigned().notNullable().primary();
			table.string("fullName", 120);
			table.enu('gender', ['male', 'female', 'other', 'unknown']);
			table.integer("age");
			table.string("email", 60);
			table.string("phone", 15);
			table.string("username", 40);
		})
	]);
};

exports.down = function (knex, Promise) {
	return Promise.all([
		knex.schema.dropTableIfExists("user")
	]);
};