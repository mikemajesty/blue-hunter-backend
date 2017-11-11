"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert = undefined;

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

var _user = require("../validator/model/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const insert = exports.insert = (req, res, next) => (0, _user2.default)(req.body).then(model => _service2.default.insert(model)).then(result => res.status(201).send(result)).catch(err => {
  console.log("validator user error", err);
  next();
});