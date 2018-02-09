import {createServer} from './src/server';
import logger from './src/util/logger';

async function start() {
  const server = await createServer();

  try {
    await server.start();
    logger.info(`Server running at ${server.info.uri}`);
  } catch (err) {
    // tslint:disable-next-line
    logger.error(err);
  }
}

start();
