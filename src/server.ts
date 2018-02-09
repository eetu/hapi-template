import * as Hapi from 'hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from 'inert';
import * as Vision from 'vision';
import Routes from './routes';

const createServer = async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });

  const swaggerOptions = {
    info: {
      title: 'Hapi Template',
      version: '1.0.0',
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

  try {
    await server.start();
    // tslint:disable-next-line
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
  }

  server.route(Routes);
  return server;
};

export {
  createServer,
};
