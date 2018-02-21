export = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: 'db/migrations',
    tableName: 'migrations',
  },
};
