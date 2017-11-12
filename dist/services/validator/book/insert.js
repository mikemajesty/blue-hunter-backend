'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model) {
  return (0, _config.validateAsPromise)(model, schema);
};

var _config = require('../config');

const schema = _config.Joi.object().keys({
  title: _config.Joi.string().required().max(120),
  authorId: _config.Joi.number().integer().optional(),
  yearPublished: _config.Joi.number().integer().max(new Date().getFullYear()),
  price: _config.Joi.number().precision(2),
  rating: _config.Joi.string().required().max(40)
});