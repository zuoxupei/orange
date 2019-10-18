const config = require("./webpack.config");

config.mode = 'development';
config.devtool = 'cheap-source-map';
config.devServer = {
  port: 9001,
  compress: true,
  stats: config.stats,
};

module.exports = config;