"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByAuthor = exports.find = exports.insert = undefined;

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

var _insert = require("../validator/book/insert");

var _insert2 = _interopRequireDefault(_insert);

var _find = require("../validator/book/find");

var _find2 = _interopRequireDefault(_find);

var _find3 = require("../validator/author/find");

var _find4 = _interopRequireDefault(_find3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insert = exports.insert = (req, res, next) => (0, _insert2.default)(req.body).then(model => _service2.default.insert(model)).then(result => res.status(201).send(result)).catch(err => {
  console.log("Validation error", err);
  next();
});

const find = exports.find = (req, res, next) => (0, _find2.default)({ title: req.params.title }).then(model => _service2.default.find(model)).then(result => res.status(200).send(result)).catch(err => {
  console.log("Validation error", err);
  next();
});

const findByAuthor = exports.findByAuthor = (req, res, next) => (0, _find4.default)({ name: req.params.name }).then(model => _service2.default.findByAuthor(model)).then(result => res.status(200).send(result)).catch(err => {
  console.log("Validation error", err);
  next();
});