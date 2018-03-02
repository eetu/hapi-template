import { createServer } from '../src/server';
import dbUtils from './util/db';

import HapiTemplateClient from '../client/src/HapiTemplateClient';

let server;

beforeAll(async () => {
  server = await createServer();
  await server.start();
});

afterAll(async () => {
  await server.stop();
});

beforeEach(async () => {
  await dbUtils.reset();
});

afterAll(async () => {
  // close database connection(s) to allow test to end gracefully
  dbUtils.close();
});

test('Add dot', async () => {
  const client = new HapiTemplateClient();
  const dot = await client.addDot({ dots: '.' });
  expect(dot).toMatchObject({ id: 1, dots: '.' });
});

test('Get dot', async () => {
  const client = new HapiTemplateClient();
  const dot = await client.addDot({ dots: '..' });
  const fetchedDot = await client.getDot(dot.id);
  expect(fetchedDot).toMatchObject(dot);
});
