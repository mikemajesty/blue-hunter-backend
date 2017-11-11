exports.seed = (knex, Promise) => {
	return knex("author").count("id")
		.then((result) => {
			if (result[0].count > 0) {
				return;
			}
			return Promise.all([
				knex("author").insert({
					"name": "@cNewman",
					"gender": "female",
					"age": 32,
					"country": "Brazil"
				}),
				knex("author").insert({
					"name": "@jNguyen",
					"gender": "male",
					"age": 36,
					"country": "England"
				}),
				knex("author").insert({
					"name": "@fMcGee",
					"gender": "male",
					"age": 61,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@mSparks",
					"gender": "male",
					"age": 49,
					"country": "Spain"
				}),
				knex("author").insert({
					"name": "@eGuerrero",
					"gender": "male",
					"age": 25,
					"country": "Netherlands"
				}),
				knex("author").insert({
					"name": "@tHolmes",
					"gender": "male",
					"age": 82,
					"country": "Brazil"
				}),
				knex("author").insert({
					"name": "@eThornton",
					"gender": "male",
					"age": 52,
					"country": "England"
				}),
				knex("author").insert({
					"name": "@eKeller",
					"gender": "female",
					"age": 36,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@lHale",
					"gender": "female",
					"age": 25,
					"country": "England"
				}),
				knex("author").insert({
					"name": "@mStanley",
					"gender": "female",
					"age": 89,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@dLindsey",
					"gender": "female",
					"age": 55,
					"country": "Brazil"
				}),
				knex("author").insert({
					"name": "@kWillis",
					"gender": "male",
					"age": 44,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@pDavidson",
					"gender": "male",
					"age": 36,
					"country": "Brazil"
				}),
				knex("author").insert({
					"name": "@tBishop",
					"gender": "male",
					"age": 74,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@mHunt",
					"gender": "male",
					"age": 81,
					"country": "USA"
				}),
				knex("author").insert({
					"name": "@mPratt",
					"gender": "male",
					"age": 65,
					"country": "England"
				}),
				knex("author").insert({
					"name": "@mLove",
					"gender": "female",
					"age": 45,
					"country": "Brazil"
				})
			]);
		});
};