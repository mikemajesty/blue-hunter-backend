"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert = undefined;

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

var _insert = require("../validator/author/insert");

var _insert2 = _interopRequireDefault(_insert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insert = exports.insert = (req, res, next) => (0, _insert2.default)(req.body).then(model => _service2.default.insert(model)).then(result => res.status(201).send(result)).catch(err => {
  console.log("Validation error", err);
  next();
});