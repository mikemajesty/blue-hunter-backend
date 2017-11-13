'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByAuthor = exports.find = exports.insert = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insert = exports.insert = book => _model2.default.query().insertGraph(book);

const find = exports.find = book => _model2.default.query().select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img').join('author', 'book.authorId', 'author.id').where('title', 'like', `%${book.title}%`);

const findByAuthor = exports.findByAuthor = author => _model2.default.query().select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img').join('author', 'book.authorId', 'author.id').where('author.name', 'like', `%${author.name}%`);

exports.default = {
  insert: insert,
  find: find,
  findByAuthor: findByAuthor
};