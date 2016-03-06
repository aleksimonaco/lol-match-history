// Karma configuration
// Generated on Thu Feb 25 2016 17:39:57 GMT+0200 (Suomen normaaliaika)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-loading-bar/src/loading-bar.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/moment/moment.js',
      'lolApp/*js',
      'test/*.spec.js'
    ],

    // list of files to exclude
    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}
