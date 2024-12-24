module.exports = ({ env }) => ({
  host: env('BACKEND_HOST', '0.0.0.0'),
  port: env.int('BACKEND_PORT', 1337),
  url: env('BACKEND_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
