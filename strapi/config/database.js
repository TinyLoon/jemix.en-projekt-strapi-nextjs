// path: ./config/database.js
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: {
      filename: path.resolve(env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
  },
});
