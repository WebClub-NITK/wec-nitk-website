module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/search',
      handler: 'search.find',
      config: {
        auth: false,
      },
    },
  ],
};
