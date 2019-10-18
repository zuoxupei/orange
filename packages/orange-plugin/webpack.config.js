const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const auto = require('./src/index')

// @ts-ignore
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
let env = process.env.VUE_APP_ENV;
if (!env) {
  env = 'dev';
}
const defaultConfig = {
  entry: "./src/index.js",
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.min.js",
    library: "OrangePlugin",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    symlinks: true,
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: {
    ejs: 'ejs',
    'element-ui': 'ELEMENT',
    vue: 'Vue',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        // options: { appendTsSuffixTo: [/\.vue$/] },
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      'process.env.VUE_APP_ENV': `"${env}"`,
    }),
    new auto()
  ],
  stats: {
    warningsFilter: /export '.+' was not found/
  }
};

module.exports = defaultConfig;
