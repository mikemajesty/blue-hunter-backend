'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Joi = undefined;
exports.validateAsPromise = validateAsPromise;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Joi = exports.Joi = _joi2.default;

function validateAsPromise(model, schema) {
  return new Promise((resolve, reject) => _joi2.default.validate(model, schema, {
    abortEarly: false,
    stripUnknown: {
      objects: true,
      arrays: false
    }
  }, (err, value) => {
    if (err) reject({
      validationError: true,
      message: err.details
    });
    resolve(value);
  }));
}