import { Request, ServerRoute } from 'hapi';
import * as Joi from 'joi';

import { getDot, insertDot } from '../controllers/dot';
import { dot } from '../validation';

const routes = [
  {
    method: 'GET',
    path: '/',
    options: {
      tags: ['api'],
      handler: (request: Request) => {
        return 'Hello world';
      },
      response: {
        status: {
          200: Joi.string().example('Hello world'),
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/dots',
    options: {
      tags: ['api'],
      validate: {
        payload: dot,
      },
      handler: insertDot,
      response: {
        status: {
          201: dot,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/dots/{id}',
    options: {
      tags: ['api'],
      validate: {
        query: {
          id: Joi.number(),
        },
      },
      handler: getDot,
      response: {
        status: {
          200: dot,
        },
      },
    },
  },
];

export default routes;
