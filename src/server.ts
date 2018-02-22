// import * as Good from 'good';
import * as Hapi from 'hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from 'inert';
import * as Vision from 'vision';

import Good from './plugins/good';
import Routes from './routes';
import config from './util/config';
import version from './util/version';

const createServer = async () => {
  const server = await new Hapi.Server({
    host: config.HOST,
    port: config.PORT,
    routes: {
      cors: config.CORS_ENABLED ? {
        origin: ['*'],
      } : false,
    },
  });

  const swaggerOptions = {
    info: {
      title: 'Hapi Template',
      version,
    },
  };

  await server.register([
    Inert,
    Vision,
    Good,
    {
      options: swaggerOptions,
      plugin: HapiSwagger,
    },
  ]);

  server.route(Routes);
  return server;
};

export {
  createServer,
};
