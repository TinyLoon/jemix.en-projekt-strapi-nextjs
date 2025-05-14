import type { Config } from '@strapi/types';

const server: Config.Server = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', Number(process.env.PORT) || 10000),
  url: env('RENDER_EXTERNAL_URL', ''),
  app: {
    keys: env.array('APP_KEYS') || ['tobemodified1', 'tobemodified2'],
  },
});

export default server;