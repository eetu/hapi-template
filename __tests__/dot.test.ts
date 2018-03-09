import { createServer } from '../src/server';
import { insertDot } from '../src/services/dot';
import dbUtils from './util/db';

beforeEach(async () => {
  await dbUtils.reset();
});

afterAll(async () => {
  // close database connection(s) to allow test to end gracefully
  await dbUtils.close();
  // remove generated test database
  await dbUtils.removeTestDatabase();
});

test('POST', async () => {
  const server = await createServer();
  const response = await server.inject({
    method: 'POST',
    url: '/dots',
    payload: {
      dots: '.',
    },
  });

  expect(response.statusCode).toBe(201);
  expect(response.result).toMatchObject({ id: 1, dots: '.' });
});

test('GET', async () => {
  const dot = await insertDot({ dots: '..' });

  const server = await createServer();
  const response = await server.inject({
    method: 'GET',
    url: `/dots/${dot.id}`,
  });

  expect(response.statusCode).toBe(200);
  expect(response.result).toMatchObject(dot);
});
