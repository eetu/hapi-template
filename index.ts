import {createServer} from './src/server';

async function start() {
  const server = await createServer();

  try {
    await server.start();
    // tslint:disable-next-line
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
  }
}

start();
