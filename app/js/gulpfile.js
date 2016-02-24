var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    watch = require('gulp-watch');

var jsPaths = ['./lolApp/*.js'];

gulp.task('js', function() {
  return gulp.src(jsPaths)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify({mangle: false}))
    .pipe(concat("all.js"))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(jsPaths, ['js']);
});

gulp.task('default', ['js', 'watch']);
