'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.insert = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insert = exports.insert = user => _model2.default.query().insertGraph(user);

const find = exports.find = user => _model2.default.query().where(_model2.default.raw('lower("fullName")'), 'like', `%${user.fullName.toLowerCase()}%`).catch(err => {
  console.log(err.stack);
});

exports.default = {
  insert: insert,
  find: find
};