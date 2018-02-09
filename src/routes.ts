import * as Joi from 'joi';

const routes = {
  method: 'GET',
  path: '/',
  options: {
    tags: ['api'],
    description: 'perkele',
    handler: (request: any) => {
      return 'Hello world';
    },
    response: {
      status: {
        200: Joi.string().example('Hello world'),
      },
    },
  },
};

export default routes;
