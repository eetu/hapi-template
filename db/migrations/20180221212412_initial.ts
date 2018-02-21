import * as Knex from 'knex';

exports.up = (knex: Knex): Promise<any> =>
  knex.schema.createTable('dots', (table) => {
    table.bigincrements('id').primary();
    table.text('dots');
    table.timestamp('updated_at').defaultTo(knex.fn.now()).index();
    table.timestamp('created_at').defaultTo(knex.fn.now()).index();
  });

exports.down = (knex: Knex): Promise<any> =>
  knex.schema.dropTable('dots');
