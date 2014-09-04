# Load required libraries
gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
sourcemaps = require 'gulp-sourcemaps'
browserify = require 'gulp-browserify'


# Browserify Task
gulp.task 'browserify', ->
  gulp.src './src/libs.coffee', { read: false }
    .pipe browserify(
      transform: ['coffeeify']
      extensions: ['.coffee']
    )
    .pipe concat 'libs.js'
    .pipe gulp.dest './build'
  gulp.src './src/app.coffee', { read: false }
    .pipe browserify(
      debug: true,
      transform: ['coffeeify']
      extensions: ['.coffee']
    )
    .pipe concat 'app.js'
    .pipe gulp.dest './build'


# Default tasks
gulp.task 'default', ['browserify'], ->
  gulp.watch './src/**/*', ['browserify']