import * as Joi from 'joi';

const dot = Joi.object({
  id: Joi.number(),
  dots: Joi.string().required(),
}).label('Dot');

export {
  dot,
};
