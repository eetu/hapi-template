import { createLogger, format, transports } from 'winston';

import config from './config';

let logger: any;

if (!logger) {
  const level = config.LOGGER_LEVEL;
  const isProd = config.NODE_ENV === 'production';

  logger = createLogger({
    level,
    format: format.combine(
      format.colorize({ all: !isProd }),
      format.simple(),
    ),
    transports: [
      new transports.Console(),
    ],
  });
}

export default logger;
