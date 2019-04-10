var gulp = require('gulp');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

gulp.task('webpack-dev-server', function(callback) {
  var server = new WebpackDevServer(webpack(config), {
    /**
     * Machine ip address - if you have a need to update files loaded on remote machine (in my case: http://192.162.1.2:8080/)
     * build path or localhost - if you dont have a need to update files loaded on remote location
     */
    publicPath: '<machine ip address || localhost || build path>',
    contentBase: 'build',
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    stats: { colors: true }
  });

  server.listen(8080, "<machine ip address || localhost>", function() {});

  gutil.log('[webpack-dev-server]',
    'http://<machine ip address || localhost>:8080/webpack-dev-server/build/index.html');

  callback();
});

gulp.task('webpack', function (callback) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
  });
});

gulp.task('dev', [
  'webpack-dev-server',
  'webpack'
]);

gulp.task('default', ['dev']);
