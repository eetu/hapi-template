import * as Knex from 'knex';
import knexConfig = require('../../knexfile');

import config from '../../src/util/config';
import db from '../../src/util/db';

const knex = Knex(knexConfig);

async function rollbackAll() {
  const currentVersion = await knex.migrate.currentVersion();
  if (currentVersion !== 'none') {
    await knex.migrate.rollback();
    rollbackAll();
  }
}

async function reset() {
  await rollbackAll();
  await knex.migrate.latest();
}

async function close() {
  await knex.destroy();
  return db.end();
}

export {
  reset,
  close,
};
