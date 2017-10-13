const webpack = require('webpack');
const path = require('path');

module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './server/index.js'],
  output: {
    filename: 'backend-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // devtool: 'cheap-eval-source-map',
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
