const config = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT) || 3000,
  LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
  CORS_ENABLED: process.env.CORS_ENABLED,
};

export default config;
