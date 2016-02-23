var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src('./lolApp/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify({mangle: false}))
    .pipe(concat("all.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js'], function() {});
