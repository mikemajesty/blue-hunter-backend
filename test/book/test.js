const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

const validParameter = 'a';

describe('GET/ Books by title', () => {
	it('Should return a list of books by title according to the search parameter.', (done) => {
		api.get(`/book/by-title/${validParameter}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
				res.body.should.be.a('Array');
				expect(res.body).not.to.be.empty;
				expect(res.status).to.equal(200);
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

describe('GET/ Invalid routes to search for books by title', () => {
	it('Should return an empty response because it did not meet the API access requirements.', (done) => {
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

const invalidParameter = 'empty';

describe('GET/ Empty book list by title', () => {
	it('Should return an empty list because the filter parameter does not exist in the database.', (done) => {
		api.get(`/book/by-title/${invalidParameter}`)
			.expect(200)
			.expect('Content-Type', /json/)
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