import { Joi, validateAsPromise } from '../config';

const schema = Joi.object().keys({
  name: Joi.string().required().max(120),
  gender: Joi.string().allow(['male', 'female', 'other', 'unknown']),
  age: Joi.number().integer().optional(),
  country: Joi.string().optional().max(40)
});

export default function (model) {
  return validateAsPromise(model, schema);
}