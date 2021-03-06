import { isEmpty, isUndefined, random } from 'lodash';

const requiredEnvs = [
  'NODE_ENV',
  'DATABASE_URL',
];

const unsetEnvs = requiredEnvs.filter((env) => isUndefined(process.env[env]));

if (!isEmpty(unsetEnvs)) {
  throw new Error(`Required ENV variables are not set: ${unsetEnvs.join(', ')}`);
}

const config = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT) || 3000,
  LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
  CORS_ENABLED: process.env.CORS_ENABLED === 'true',
  DATABASE_URL: process.env.NODE_ENV === 'test' ?
    `${process.env.DATABASE_URL}_${random(Number.MAX_SAFE_INTEGER)}` : process.env.DATABASE_URL,
};

export default config;
