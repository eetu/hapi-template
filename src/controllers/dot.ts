import * as Boom from 'boom';

import * as dotService from '../services/dot';

const example = {
  id: 1,
  dots: '...',
};

function insertDot(request: any, h: any): Dot {
  const dot = request.payload;
  return h.response(dotService.insertDot(dot)).code(201);
}

function getDot(request: any, h: any): Dot {
  const id = request.params.id;
  return dotService.getDot(id);
}

export {
  insertDot,
  getDot,
};
