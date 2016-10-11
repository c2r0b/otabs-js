var gulp = require('gulp'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    header = require('gulp-header'),
    pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %>',
  ' * <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// produce uglified JS
gulp.task('script', function() {
  return gulp.src('otabs.js')
    .pipe(
      uglify().on('error', console.error.bind(console))
    )
    .pipe(rename('otabs.min.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest(''));
});

// execute tasks
gulp.task('default', ['script'], function(){});
