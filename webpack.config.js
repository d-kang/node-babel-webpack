const path = require('path');

module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './server/index.js'],
  output: {
    filename: 'backend-bundle.js',
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
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 2500,
    stats: 'errors-only',
    open: false,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]

}
