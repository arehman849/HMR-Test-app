var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  watch: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    path: path.join(__dirname, 'build/'),
      /**
       * Machine ip address if you have a need to update files loaded on remote machine (in my case: http://192.162.1.2:8080/)
       * build path if you dont have a need to update files loaded on remote location
       */
    publicPath: '<Machine Ip address || build path>', 
    filename: 'index.js',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
