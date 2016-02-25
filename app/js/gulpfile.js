var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    watch = require('gulp-watch'),
    Server = require('karma').Server;

var jsPaths = ['./lolApp/*.js'];

gulp.task('test', function (done) {
  new Server({
    configFile:  __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

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

gulp.task('default', ['test', 'js', 'watch']);
