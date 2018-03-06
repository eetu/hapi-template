import { createLogger, format, transports } from 'winston';

import config from './config';

const level = config.LOGGER_LEVEL;
const isProd = config.NODE_ENV === 'production';

const logger = createLogger({
  level,
  format: format.combine(
    format.colorize({ all: !isProd }),
    format.simple(),
  ),
  transports: [
    new transports.Console(),
  ],
});

export default logger;
