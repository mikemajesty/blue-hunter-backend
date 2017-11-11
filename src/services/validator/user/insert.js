import { Joi, validateAsPromise } from '../config';

const schema = Joi.object().keys({
  fullName: Joi.string().required().max(120),
  gender: Joi.string().allow(['male', 'female', 'other', 'unknown']),
  age: Joi.number().integer().required(),
  email: Joi.string().email().max(60),
  phone: Joi.string().optional().max(15),
  username: Joi.string().required().max(40),
});

export default function (model) {
  return validateAsPromise(model, schema);
}