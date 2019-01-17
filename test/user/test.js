const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

const validParameter = 'a';

describe('GET/ Customers by name', () => {
	it('Should return a list of customer by title according to the search parameter.', (done) => {
		api.get(`/user/by-name/${validParameter}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
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

describe('GET/ Invalid routes to search for customer', () => {
	it('Should return an empty response because it did not meet the API access requirements.', (done) => {
		api.get(`/user/by-name/`)
			.expect(404)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				expect(res.body).to.not.be.null;
				expect(res.body).to.not.be.undefined;
				expect(res.body).to.be.empty;
				expect(res.status).to.equal(404);
				res.body.should.be.a('object');
				done();
			});
	});
});

const invalidParameter = 'empty';

describe('GET/ Empty customer list', () => {
	it('Should return an empty list because the filter parameter does not exist in the database.', (done) => {
		api.get(`/user/by-name/${invalidParameter}`)
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
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