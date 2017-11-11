exports.seed = (knex, Promise) => {
	return knex("book").count("id")
		.then((result) => {
			if (result[0].count > 0) {
				return;
			}
			return Promise.all([
				knex("book").insert({
					"title": "Culpa Enim Suscipit Voluptatem",
					"authorId": knex.select('id').from('author').where('name', '=', "@cNewman"),
					"yearPublished": 2015,
					"price": "12.99",
					"rating": "1.3/5"
				}), knex("book").insert({
					"title": "Quasi Excepturi Mollitia",
					"authorId": knex.select('id').from('author').where('name', '=', "@jNguyen"),
					"yearPublished": 2006,
					"price": "15.99",
					"rating": "4.5/5"
				}), knex("book").insert({
					"title": "Magnam Obcaecati Ab Asperiores A",
					"authorId": knex.select('id').from('author').where('name', '=', "@fMcGee"),
					"yearPublished": 2007,
					"price": "20.99",
					"rating": "4.1/5"
				}), knex("book").insert({
					"title": "Voluptate Cumque Qui Nihil",
					"authorId": knex.select('id').from('author').where('name', '=', "@mSparks"),
					"yearPublished": 2012,
					"price": "8.99",
					"rating": "1.6/5"
				}), knex("book").insert({
					"title": "Laboriosam",
					"authorId": knex.select('id').from('author').where('name', '=', "@eGuerrero"),
					"yearPublished": 2010,
					"price": "8.99",
					"rating": "4.8/5"
				}), knex("book").insert({
					"title": "Voluptatibus Iure",
					"authorId": knex.select('id').from('author').where('name', '=', "@tHolmes"),
					"yearPublished": 2003,
					"price": "14.99",
					"rating": "3.2/5"
				}), knex("book").insert({
					"title": "Aliquam Magnam Magni Voluptatem Dolore",
					"authorId": knex.select('id').from('author').where('name', '=', "@eThornton"),
					"yearPublished": 2016,
					"price": "7.99",
					"rating": "1.6/5"
				}), knex("book").insert({
					"title": "Architecto Non Quasi Sed Consequatur",
					"authorId": knex.select('id').from('author').where('name', '=', "@eKeller"),
					"yearPublished": 2016,
					"price": "12.99",
					"rating": "2/5"
				}), knex("book").insert({
					"title": "Perspiciatis Quisquam",
					"authorId": knex.select('id').from('author').where('name', '=', "@lHale"),
					"yearPublished": 2012,
					"price": "11.99",
					"rating": "4.6/5"
				}), knex("book").insert({
					"title": "Aperiam Iure",
					"authorId": knex.select('id').from('author').where('name', '=', "@mStanley"),
					"yearPublished": 2006,
					"price": "9.99",
					"rating": "2.1/5"
				}), knex("book").insert({
					"title": "Quibusdam Similique Eius Earum Repudiandae",
					"authorId": knex.select('id').from('author').where('name', '=', "@dLindsey"),
					"yearPublished": 2001,
					"price": "9.99",
					"rating": "5/5"
				}), knex("book").insert({
					"title": "Eaque Soluta",
					"authorId": knex.select('id').from('author').where('name', '=', "@kWillis"),
					"yearPublished": 2004,
					"price": "10.99",
					"rating": "2.7/5"
				}), knex("book").insert({
					"title": "Eveniet Tempora Doloremque Aliquam",
					"authorId": knex.select('id').from('author').where('name', '=', "@pDavidson"),
					"yearPublished": 2010,
					"price": "15.99",
					"rating": "4.5/5"
				}), knex("book").insert({
					"title": "Officia Ipsam Ea Soluta",
					"authorId": knex.select('id').from('author').where('name', '=', "@tBishop"),
					"yearPublished": 2008,
					"price": "19.99",
					"rating": "4.2/5"
				}), knex("book").insert({
					"title": "Ducimus Repellat Sequi Accusamus Unde",
					"authorId": knex.select('id').from('author').where('name', '=', "@mHunt"),
					"yearPublished": 2010,
					"price": "3.99",
					"rating": "1/5"
				}), knex("book").insert({
					"title": "Dicta Molestiae Perspiciatis Omnis Ducimus",
					"authorId": knex.select('id').from('author').where('name', '=', "@mPratt"),
					"yearPublished": 2002,
					"price": "7.99",
					"rating": "4.5/5"
				}), knex("book").insert({
					"title": "Officiis Suscipit Quasi Sequi Error",
					"authorId": knex.select('id').from('author').where('name', '=', "@mLove"),
					"yearPublished": 2009,
					"price": "12.99",
					"rating": "2.9/5"
				}),
				knex("book").insert({
					"title": "Ex",
					"author": knex.select('id').from('author').where('name', '=', "@aDaniels"),
					"yearPublished": 2005,
					"price": "24.99",
					"rating": "2.4/5"
				}),
				knex("book").insert({
					"title": "Quidem Delectus",
					"author": knex.select('id').from('author').where('name', '=', "@mHayes"),
					"yearPublished": 2005,
					"price": "20.99",
					"rating": "4.1/5"
				}),
				knex("book").insert({
					"title": "Iste Quod",
					"author": knex.select('id').from('author').where('name', '=', "@mIngram"),
					"yearPublished": 2005,
					"price": "19.99",
					"rating": "2/5"
				})
			]);
		});
};