'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model) {
  return (0, _config.validateAsPromise)(model, schema);
};

var _config = require('../config');

const schema = _config.Joi.object().keys({
  fullName: _config.Joi.string().required().min(1).max(120)
});