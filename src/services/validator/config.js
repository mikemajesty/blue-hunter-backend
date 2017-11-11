import joi from 'joi';

export const Joi = joi;

export function validateAsPromise(model, schema) {
  return new Promise((resolve, reject) => {
    joi.validate(model, schema, { abortEarly: false, stripUnknown: { objects: true, arrays: false } }, (err, value) => {
      if (err) reject({ validationError: true, message: err.details });
      resolve(value);
    });
  });
}