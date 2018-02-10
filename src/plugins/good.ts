import * as Good from 'good';
import { Writable } from 'stream';

import logger from '../util/logger';

const handlers: any = {
  log: (event: any) => ({
    msg: `[${event.tags}] ${event.data}`,
    level: 'info',
  }),

  error: (event: any) => ({
    msg: event.error.message,
    level: 'error',
  }),

  response: (event: any) => ({
    msg: `${event.instance}: ${event.method.toUpperCase()} ${event.path} ${JSON.stringify(event.query)} ${event.statusCode} (${event.responseTime}ms)`,
    level: 'info',
  }),

  ops: (event: any) => {
    const mem = Math.round(event.proc.mem.rss / (1024 * 1024));
    const uptime = event.proc.uptime;
    const load = event.os.load;

    return {
      msg: `memory: ${mem}Mb, uptime: ${uptime}s, load: ${load}`,
      level: 'silly',
    };
  },

  request: (event: any) => ({
    msg: `[${event.tags}] ${event.method.toUpperCase()} ${event.path} ${event.data}`,
    level: 'info',
  }),
};

class WinstonReporter extends Writable {
  constructor() {
    super({ objectMode: true });
  }

  public _write(event: any, encoding: any, next: (() => void)) {
    const type: string = event.event;
    const { msg, level } = handlers[type](event);
    logger[level](msg);
    return next();
  }
}

const goodOptions = {
  ops: {
    level: 'silly',
    interval: 10000,
  },
  reporters: {
    winston: [new WinstonReporter()],
  },
};

export default {
  options: goodOptions,
  plugin: Good,
};
