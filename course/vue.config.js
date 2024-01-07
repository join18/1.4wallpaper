const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/data": {
        target: "http://localhost:3000",
        pathRewrite: { "^/data": "" },

        ws: true,
        changeOrigin: true,
      },
    },
  },
};
