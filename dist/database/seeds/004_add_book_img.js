"use strict";

exports.seed = function (knex, Promise) {
	return knex("book").then(function (result) {
		if (result[0].img) {
			return;
		}
		return Promise.all([knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@mLove")).update({
			'img': 'https://s18.postimg.org/5f3xjx6eh/Officiis_Suscipit_Quasi_Sequi_Error.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@mPratt")).update({
			'img': 'https://s18.postimg.org/yhi7mv2zt/Dicta_Molestiae_Perspiciatis_Omnis_Ducimus.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@mHunt")).update({
			'img': 'https://s18.postimg.org/stbww3195/Ducimus_Repellat_Sequi_Accusamus_Unde.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@tBishop")).update({
			'img': 'https://s18.postimg.org/p9pz6cquh/Officia_Ipsam_Ea_Soluta.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@pDavidson")).update({
			'img': 'https://s18.postimg.org/pmhdckyuh/Eveniet_Tempora_Doloremque_Aliquam.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@kWillis")).update({
			'img': 'https://s18.postimg.org/cwd4z5bd5/Eaque_Soluta.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@dLindsey")).update({
			'img': 'https://s18.postimg.org/o8pqgzhi1/Quibusdam_Similique_Eius_Earum_Repudiandae.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@mStanley")).update({
			'img': 'https://s18.postimg.org/fdow6i309/Aperiam_Iure.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@lHale")).update({
			'img': 'https://s18.postimg.org/7xpmkqhvt/Perspiciatis_Quisquam.png'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@eThornton")).update({
			'img': 'https://s18.postimg.org/z8axsr7yx/Aliquam_Magnam_Magni_Voluptatem_Dolore.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@eKeller")).update({
			'img': 'https://s18.postimg.org/oy8itkn95/Architecto_Non_Quasi_Sed_Consequatur.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@tHolmes")).update({
			'img': 'https://s18.postimg.org/we7sfg39l/Voluptatibus_Iure.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@eGuerrero")).update({
			'img': 'https://s18.postimg.org/6io1wayvt/Laboriosam.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@fMcGee")).update({
			'img': 'https://s18.postimg.org/dn5v4t3ex/Magnam_Obcaecati_Ab_Asperiores_A.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@mSparks")).update({
			'img': 'https://s18.postimg.org/frq85ya7d/Voluptate_Cumque_Qui_Nihil.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@jNguyen")).update({
			'img': 'https://s18.postimg.org/dzx9b43q1/Quasi_Excepturi_Mollitia.jpg'
		}), knex("book").where('authorId', '=', knex.select('id').from('author').where('name', '=', "@cNewman")).update({
			'img': 'https://s18.postimg.org/dn5v51o21/Culpa_Enim_Suscipit_Voluptatem.jpg'
		})]);
	});
};