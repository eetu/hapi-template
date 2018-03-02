import * as Knex from 'knex';
import * as _ from 'lodash';

import knexConfig = require('../../knexfile');
import config from '../../src/util/config';

async function rollbackAll(knex) {
  const currentVersion = await knex.migrate.currentVersion();
  if (currentVersion !== 'none') {
    await knex.migrate.rollback();
    await rollbackAll(knex);
  }
}

async function reset(knex) {
  await rollbackAll(knex);
  await knex.migrate.latest();
}

async function close(knex) {
  await knex.destroy(knex);
  const db = require('../../src/util/db').default;
  return db.end();
}

async function createDatabase(knexConfiguration) {
  const index = config.DATABASE_URL.lastIndexOf('/');
  const databasePath = config.DATABASE_URL.substring(0, index);
  const database = config.DATABASE_URL.substring(index + 1);

  const knexx = Knex(_.assign({}, knexConfiguration, { connection: `${databasePath}/test` }));

  await knexx.raw(`CREATE DATABASE ${database}`);
  await knexx.destroy();
}

async function create() {
  await createDatabase(knexConfig);
  const knex = Knex(knexConfig);
  return knex;
}

let knexConnection;

export default {
  reset: async () => {
    knexConnection = knexConnection ? knexConnection : (await create());
    return reset(knexConnection);
  },
  close: async () => {
    return close(knexConnection);
  },
};
