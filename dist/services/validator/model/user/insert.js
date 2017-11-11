'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model) {
  return (0, _config.validateAsPromise)(model, schema);
};

var _config = require('../../config');

const schema = _config.Joi.object().keys({
  fullName: _config.Joi.string().required().max(120),
  gender: _config.Joi.string().allow(['male', 'female', 'other', 'unknown']),
  age: _config.Joi.number().integer().required(),
  email: _config.Joi.string().email().max(60),
  phone: _config.Joi.string().optional().max(15),
  username: _config.Joi.string().required().max(40)
});