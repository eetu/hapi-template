import * as Knex from 'knex';
import * as _ from 'lodash';
import { Client } from 'pg';

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
  await knex.destroy();
  const db = require('../../src/util/db').default;

  return db.end();
}

async function remove() {
  const { database, databasePath } = getDatabaseNameAndPath();

  // Connect to existing database
  const knex = Knex(_.assign({}, knexConfig, { connection: `${databasePath}/test` }));

  // Remove generated test database
  await knex.raw('DROP DATABASE ??', database);
  await knex.destroy();
}

async function createDatabase() {
  const { database, databasePath } = getDatabaseNameAndPath();

  // Connect to existing database
  const knex = Knex(_.assign({}, knexConfig, { connection: `${databasePath}/test` }));

  // Create test database with unique name
  await knex.raw('CREATE DATABASE ??', database);
  await knex.destroy();
}

async function create() {
  await createDatabase();
  const knex = Knex(knexConfig);

  return knex;
}

function getDatabaseNameAndPath() {
  const index = config.DATABASE_URL.lastIndexOf('/');
  const databasePath = config.DATABASE_URL.substring(0, index);
  const database = config.DATABASE_URL.substring(index + 1);

  return {
    databasePath,
    database,
  };
}

let knexConnection;

export default {
  reset: async () => {
    // create test database with unique name on the first run
    knexConnection = knexConnection ? knexConnection : (await create());
    return reset(knexConnection);
  },
  close: async () => {
    return close(knexConnection);
  },
  removeTestDatabase: async () => {
    return remove();
  },
};
