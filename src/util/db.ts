import { Pool } from 'pg';

import config from './config';
import logger from './logger';

const opts = {
  connectionString: config.DATABASE_URL,
};

logger.info('database connection', opts);

const client = new Pool(opts);

export default client;
