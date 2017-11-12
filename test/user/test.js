const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

const parametroPesquisaValido = 'a';

describe('GET/ clientes por nome', function () {
	it('Deveria retornar uma lista de clientes no formato de JSON', function (done) {
		api.get(`/user/by-name/${parametroPesquisaValido}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				res.body.should.be.a('Array');
				expect(res.body).not.to.be.empty; 
				res.body[0].should.have.property('id');
				res.body[0].should.have.property('fullName');
				res.body[0].should.have.property('gender');
				res.body[0].should.have.property('age');
				res.body[0].should.have.property('email');
				res.body[0].should.have.property('phone');
				res.body[0].should.have.property('username');
				expect(res.status).to.equal(200);
				done();
			});
	});
});

describe('GET/ rota inválida de clientes', function () {
	it('Deveria um objeto vazio por falta do mesmo no banco de dados', function (done) {
		api.get(`/user/by-name/`)
			.expect(404)
			.expect()
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				expect(res.body).to.not.be.null; 
				expect(res.body).to.not.be.undefined; 
				expect(res.body).to.be.empty; 
				expect(res.status).to.equal(404);
				res.body.should.be.a('object');
				done();
			});
	});
});

const parametroPesquisaInvalido = 'nao-retornara-nada';

describe('GET/ lista vazia de clientes', function () {
	it('Deveria retornar uma lista vazia por não existir no banco de dados', function (done) {
		api.get(`/user/by-name/${parametroPesquisaInvalido}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				expect(res.status).to.equal(200);
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