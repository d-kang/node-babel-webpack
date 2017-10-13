const webpack = require('webpack');
 // 'webpack';
const path = require('path');



module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './server/index.js'],
  output: {
    filename: 'backend.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',   //compilation speed vs. quality tradeoff
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'stage-2'],
          },
        },
      },
    ],
  },

}
