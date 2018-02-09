import { createLogger, format, transports } from 'winston';

import config from './config';

let logger: any;

if (!logger) {
  const level = config.LOGGER_LEVEL || 'info';
  const isProd = config.NODE_ENV === 'production';

  logger = createLogger({
    level,
    colorize: !isProd,
    format: isProd ? format.json() : format.simple(),
    transports: [
      new transports.Console(),
    ],
  });
}

export default logger;
