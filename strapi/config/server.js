export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', ''), // optional aber hilfreich
  app: {
    keys: env.array('APP_KEYS') || ['tobemodified1', 'tobemodified2'],
  },
});