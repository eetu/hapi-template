import config from './src/util/config';

export = {
  client: 'pg',
  connection: config.DATABASE_URL,
  migrations: {
    directory: 'db/migrations',
    tableName: 'migrations',
  },
};
