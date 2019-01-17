import { Joi, validateAsPromise } from '../config';

const schema = Joi.object().keys({
  title: Joi.string().required().max(120),
  authorId: Joi.number().integer().optional(),
  yearPublished: Joi.number().integer().max(new Date().getFullYear()),
  price: Joi.number().precision(2),
  rating: Joi.string().required().max(40),
});

export default function (model) {
  return validateAsPromise(model, schema);
}