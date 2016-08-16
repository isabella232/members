// *** dependencies *** //

var gulp = require('gulp');
var rimraf = require('rimraf');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var path = require('path');
var nodemon = require('gulp-nodemon');

// *** config *** //

var paths = {
  styles: './src/client/css/*.css',
  scripts: './src/client/js/*.js',
  distDirectory: './dist',
  server: './dist/server/bin/www'
};

var nodemonConfig = {
  script: paths.server,
  ext: 'html js css',
  ignore: ['node_modules'],
  env: {
    NODE_ENV: 'development'
  }
};

// *** create build for deployment *** //

gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['minify-css'],
    ['minify-js'],
    ['copy-server-files'],
    ['nodemon']
  );
});

// *** sub tasks ** //

gulp.task('clean', function (cb) {
  rimraf(paths.distDirectory, cb);
});

gulp.task('minify-css', function() {
  var opts = {keepSpecialComments:'*'};
  return gulp.src(paths.styles)
    .pipe(cleanCSS({debug: true}))
    .pipe(gulp.dest(path.join(
      __dirname,
      paths.distDirectory,
      '/client/css/'
    )));
});

gulp.task('minify-js', function() {
  gulp.src(paths.scripts)
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(
      __dirname,
      paths.distDirectory,
      '/client/js/'
    )));
});

gulp.task('copy-server-files', function () {
  gulp.src('./src/server/**/*')
    .pipe(gulp.dest('./dist/server/'));
});

gulp.task('nodemon', function () {
  return nodemon(nodemonConfig);
});
