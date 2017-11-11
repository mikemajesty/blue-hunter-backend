exports.seed = function (knex, Promise) {
	return knex("author").count("id")
		.then(function (result) {
			if (result[0].count > 0) {
				return;
			}
			return Promise.all([
				knex("user").insert({
					"fullName": "Nina Ellis",
					"gender": "female",
					"age": 61,
					"email": "nEllis@example.com",
					"phone": "(443) 545-8479",
					"username": "nEllis"
				}),
				knex("user").insert({
					"fullName": "Nathan Cobb",
					"gender": "male",
					"age": 39,
					"email": "nCobb@example.com",
					"phone": "(368) 849-8721",
					"username": "nCobb"
				}),
				knex("user").insert({
					"fullName": "Nell Payne",
					"gender": "female",
					"age": 49,
					"email": "nPayne@example.com",
					"phone": "(754) 297-3282",
					"username": "nPayne"
				}),
				knex("user").insert({
					"fullName": "Juan Douglas",
					"gender": "male",
					"age": 37,
					"email": "jDouglas@example.com",
					"phone": "(950) 933-8532",
					"username": "jDouglas"
				}),
				knex("user").insert({
					"fullName": "Manuel Parker",
					"gender": "male",
					"age": 34,
					"email": "mParker@example.com",
					"phone": "(754) 381-4273",
					"username": "mParker"
				}),
				knex("user").insert({
					"fullName": "Benjamin Day",
					"gender": "male",
					"age": 21,
					"email": "bDay@example.com",
					"phone": "(360) 935-7443",
					"username": "bDay"
				}),
				knex("user").insert({
					"fullName": "Patrick Maldonado",
					"gender": "male",
					"age": 58,
					"email": "pMaldonado@example.com",
					"phone": "(204) 601-5789",
					"username": "pMaldonado"
				}),
				knex("user").insert({
					"fullName": "Katherine Love",
					"gender": "female",
					"age": 46,
					"email": "kLove@example.com",
					"phone": "(679) 945-7785",
					"username": "kLove"
				}),
				knex("user").insert({
					"fullName": "Travis Bowen",
					"gender": "male",
					"age": 60,
					"email": "tBowen@example.com",
					"phone": "(528) 531-1611",
					"username": "tBowen"
				}),
				knex("user").insert({
					"fullName": "Samuel Hampton",
					"gender": "male",
					"age": 43,
					"email": "sHampton@example.com",
					"phone": "(913) 298-8410",
					"username": "sHampton"
				}),
				knex("user").insert({
					"fullName": "Nicholas Ellis",
					"gender": "male",
					"age": 27,
					"email": "nEllis@example.com",
					"phone": "(813) 229-1864",
					"username": "nEllis"
				}),
				knex("user").insert({
					"fullName": "Louise Lucas",
					"gender": "female",
					"age": 20,
					"email": "lLucas@example.com",
					"phone": "(546) 345-1371",
					"username": "lLucas"
				}),
				knex("user").insert({
					"fullName": "Frances Perkins",
					"gender": "female",
					"age": 23,
					"email": "fPerkins@example.com",
					"phone": "(214) 885-5742",
					"username": "fPerkins"
				}),
				knex("user").insert({
					"fullName": "Esther Castillo",
					"gender": "female",
					"age": 36,
					"email": "eCastillo@example.com",
					"phone": "(541) 725-8912",
					"username": "eCastillo"
				}),
				knex("user").insert({
					"fullName": "Martha Gibson",
					"gender": "female",
					"age": 59,
					"email": "mGibson@example.com",
					"phone": "(739) 705-4110",
					"username": "mGibson"
				}),
				knex("user").insert({
					"fullName": "Ruby Harrington",
					"gender": "female",
					"age": 26,
					"email": "rHarrington@example.com",
					"phone": "(883) 524-1126",
					"username": "rHarrington"
				}),
				knex("user").insert({
					"fullName": "Inez Peterson",
					"gender": "female",
					"age": 61,
					"email": "iPeterson@example.com",
					"phone": "(257) 202-5035",
					"username": "iPeterson"
				}),

				knex("user").insert({
					"fullName": "Jeff Smith",
					"gender": "male",
					"age": 37,
					"email": "jSmith@example.com",
					"phone": "(506) 360-8982",
					"username": "jSmith"
				}),
				knex("user").insert({
					"fullName": "Kevin Norton",
					"gender": "male",
					"age": 20,
					"email": "kNorton@example.com",
					"phone": "(239) 237-6736",
					"username": "kNorton"
				}),
				knex("user").insert({
					"fullName": "Lucille Curry",
					"gender": "female",
					"age": 28,
					"email": "lCurry@example.com",
					"phone": "(418) 496-5593",
					"username": "lCurry"
				})
			]);
		});
};