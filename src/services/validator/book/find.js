import { Joi, validateAsPromise } from '../config';

const schema = Joi.object().keys({
  title: Joi.string().required().min(1).max(120),
});

export default function (model) {
  return validateAsPromise(model, schema);
}