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
				res.body[0].should.have.property('id');
				res.body[0].should.have.property('fullName');
				res.body[0].should.have.property('gender');
				res.body[0].should.have.property('age');
				res.body[0].should.have.property('email');
				res.body[0].should.have.property('phone');
				res.body[0].should.have.property('username');
				done();
			});
	});
});

describe('GET/ rota invalida para clientes', function () {
	it('Deveria retornar 404 por falta do parametro de pesquisa', function (done) {
		api.get(`/user/by-name/`)
			.expect(404)
			.expect()
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				expect(res.body).to.not.be.null; 
				expect(res.body).to.not.be.undefined; 
				expect(res.body).to.be.empty; 
				res.body.should.be.a('object');
				done();
			});
	});
});

const parametroPesquisaInvalido = 'ddfdfdfddf';

describe('GET/ lista vazia de clientes', function () {
	it('Deve retornar uma lista vazia por não existir no banco de dados', function (done) {
		api.get(`/user/by-name/${parametroPesquisaInvalido}`)
			.expect(404)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				expect(res.body).to.not.be.null; 
				expect(res.body).to.not.be.undefined; 
				expect(res.body).to.be.empty; 
				res.body.should.be.a('array');
				res.body.should.have.length(0);
				done();
			});
	});
});