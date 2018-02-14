import { Request, ServerRoute } from 'hapi';
import * as Joi from 'joi';

const response: any = Joi.string().example('Hello world');

const routes: ServerRoute = {
  method: 'GET',
  path: '/',
  options: {
    tags: ['api'],
    handler: (request: Request) => {
      return 'Hello world';
    },
    response: {
      status: {
        200: response,
      },
    },
  },
};

export default routes;
