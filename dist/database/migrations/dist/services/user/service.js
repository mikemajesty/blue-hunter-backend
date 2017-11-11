"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert = undefined;

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const insert = exports.insert = user => _model2.default.query().insertGraph(user);

exports.default = {
  insert: insert
};