const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'orange',
    libraryTarget: 'umd',
  },
  devServer: {
    port: 8087,
    hot: true,
    contentBase: './test',
  },
}