import { createServer } from '../src/server';

test('POST', async () => {
  const server = await createServer();
  const response = await server.inject({
    method: 'POST',
    url: '/dot',
    payload: {
      dots: '.',
    },
  });

  expect(response.statusCode).toBe(201);
  expect(response.result).toMatchObject({ id: 1, dots: '.' });
});

test('GET', async () => {
  const server = await createServer();
  const response = await server.inject({
    method: 'GET',
    url: '/dot/1',
  });

  expect(response.statusCode).toBe(200);
  expect(response.result).toMatchObject({ id: 1, dots: '.' });
});
