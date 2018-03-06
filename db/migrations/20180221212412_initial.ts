import * as Knex from 'knex';

exports.up = (knex: Knex): Knex.SchemaBuilder =>
  knex.schema.createTable('dots', (table) => {
    table.bigIncrements('id').primary();
    table.text('dots');
    table.timestamp('updated_at').defaultTo(knex.fn.now()).index();
    table.timestamp('created_at').defaultTo(knex.fn.now()).index();
  });

exports.down = (knex: Knex): Knex.SchemaBuilder =>
  knex.schema.dropTable('dots');
