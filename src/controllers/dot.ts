import * as Boom from 'boom';
import { isUndefined } from 'lodash';

import * as dotService from '../services/dot';

async function insertDot(request: any, h: any): Promise<Dot> {
  const dot = request.payload;
  const inserted = await dotService.insertDot(dot);
  return h.response(inserted).code(201);
}

async function getDot(request: any, h: any): Promise<Dot> {
  const id = Number(request.params.id);
  const dot = await dotService.getDot(id);

  if (isUndefined(dot)) {
    throw Boom.notFound();
  }

  return dot;
}

export {
  insertDot,
  getDot,
};
