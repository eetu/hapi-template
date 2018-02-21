import * as Boom from 'boom';

import * as dotService from '../services/dot';

function insertDot(request: any, h: any): Dot {
  const dot = request.payload;
  return h.response(dotService.insertDot(dot)).code(201);
}

function getDot(request: any, h: any): Dot {
  const id = Number(request.params.id);
  return dotService.getDot(id);
}

export {
  insertDot,
  getDot,
};
