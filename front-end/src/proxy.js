const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:8000", 
      changeOrigin: true,
    })
  );
};


// I added this file to configure proxy for development, please feel free to touch it if you think there is a bug here