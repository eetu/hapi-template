import * as Hapi from 'hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from 'inert';
import * as Vision from 'vision';

import Routes from './routes';
import version from './util/version';

const createServer = async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000,
    routes: {
      cors: true,
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
