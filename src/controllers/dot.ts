import * as Boom from 'boom';
import { Request, ResponseObject, ResponseToolkit } from 'hapi';
import { isUndefined } from 'lodash';

import * as dotService from '../services/dot';

async function insertDot(request: DotRequest, h: ResponseToolkit ): Promise<ResponseObject> {
  const inserted = await dotService.insertDot(request.payload);
  return h.response(inserted).code(201);
}

async function getDot(request: Request, h: ResponseToolkit): Promise<Dot> {
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
