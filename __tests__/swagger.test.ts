import { createServer } from '../src/server';

test('swagger.json is generated', async () => {
  const server = await createServer();
  const response = await server.inject({
    method: 'GET',
    url: '/swagger.json',
  });

  expect(response.statusCode).toBe(200);
  expect(response.result).toMatchObject({});
});
