import {createServer} from './src/server';
import db from './src/util/db';
import logger from './src/util/logger';

async function start() {
  const server = await createServer();

  try {
    await server.start();
    logger.info(`Server running at ${server.info.uri}`);
  } catch (err) {
    logger.error(err);
  }

  async function shutdown() {
    logger.info('caught SIGTERM, gracefully shutdown service');
    await server.stop({ timeout: 5000 });
    await db.end();
    process.exit(0);
  }

  process.on('SIGTERM', async () => {
    shutdown();
  });
  process.on('SIGINT', async () => {
    shutdown();
  });
}

start();
