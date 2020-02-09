const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:7001',
      changeOrigin: true,
    })
  );
  app.use(
    '/public',
    proxy({
      target: 'http://localhost:7001',
      changeOrigin: true,
    })
  );
};