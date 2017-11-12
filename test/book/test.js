const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

const parametroPesquisaValido = 'a';

describe('GET/ livros por título', function () {
	it('Deveria retornar uma lista de livros por título em um formato de JSON', function (done) {
		api.get(`/book/by-title/${parametroPesquisaValido}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				res.body.should.be.a('Array');
				expect(res.body).not.to.be.empty; 
				res.body[0].should.have.property('id');
				res.body[0].should.have.property('title');
				res.body[0].should.have.property('author');
				res.body[0].should.have.property('yearPublished');
				res.body[0].should.have.property('price');
				res.body[0].should.have.property('rating');
				done();
			});
	});
});

describe('GET/ rota inválida para buscar livros por título', function () {
	it('Deveria um objeto vazio por falta do mesmo no banco de dados', function (done) {
		api.get(`/book/by-title/`)
			.expect(404)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				expect(res.body).to.not.be.null; 
				expect(res.body).to.not.be.undefined; 
				expect(res.body).to.be.empty; 
				res.body.should.be.a('object');
				expect(res.status).to.equal(404);
				done();
			});
	});
});

const parametroPesquisaInvalido = 'nao-retornara-nada';

describe('GET/ lista vazia de livros por título ', function () {
	it('Deveria retornar uma lista vazia por não existir no banco de dados', function (done) {
		api.get(`/book/by-title/${parametroPesquisaInvalido}`)
			.expect(404)
			.expect('Content-titlez', /json/)
			.end(function (err, res) {
				expect(res.body).to.not.be.null; 
				expect(res.body).to.not.be.undefined; 
				expect(res.body).to.be.empty; 
				res.body.should.be.a('array');
				res.body.should.have.length(0);
				expect(res.status).to.equal(200);
				done();
			});
	});
});