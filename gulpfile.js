var gulp = require('gulp');
var react = require('gulp-react');
var stylus = require('gulp-stylus');
var notify = require('gulp-notify');
var webpack = require('webpack');
var Notifier = require('node-notifier');
var concat = require('gulp-concat');
var connect = require('connect');

var myDevConfig = require('./webpack.config.js');

var notify = function (options) {
  new Notifier().notify(options);
};

var paths = {
  jsx: 'src/app/**/*.jsx',
  scripts: 'src/app/**/*.js',
  images: '',
  stylus: 'src/app/**/*.styl'
};

gulp.task('connect', function () {
  var app = connect()
    .use(connect.static('public'))
    .listen(9002);
});

gulp.task('styles', function () {
  gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('webpack:build-dev', function (callback) {
  var devCompiler = webpack(myDevConfig);
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    callback();
  });
});

gulp.task("watch-app", function() {
  gulp.watch(["src/app/**/*", "src/app/**/*"], ["build-app"]);
});

gulp.task("build-app", ["webpack:build-dev", "styles"], function () {
  notify({
    title: 'Gulp Build',
    message: 'App was built'
  });
});

gulp.task('default', ['connect', 'build-app', 'watch-app']);
