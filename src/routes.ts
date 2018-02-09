const routes = {
  method: 'GET',
  path: '/',
  options: {
    handler: (request: any) => {
      return 'Hello world';
    },
  },
};

export default routes;
