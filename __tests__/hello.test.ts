import { createServer } from '../src/server';

test('hello world', async () => {
  const server = await createServer();
  const response = await server.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.statusCode).toBe(200);
  expect(response.result).toBe('Hello world');
});
