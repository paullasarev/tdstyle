// Karma configuration
// Generated on Sat Oct 25 2014 12:36:15 GMT+0400 (SAMT)

module.exports = function(config) {

  var browsers = ['Chrome', 'Firefox','PhantomJS'];
  if (/^win/.test(process.platform))
    browsers.push('IE');
  if (process.platform === 'darwin')
    browsers.push('Safari');

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './bower_components/jquery/dist/jquery.js', watched:false, included:true, served:true},
      {pattern: './bower_components/assert/assert.js', watched:false, included:true, served:true},
      {pattern:'./tdstyle.js', watched:true, included:true, served:true},
      './test/**/*.js',
      //'./test/vertical-center/*.js',
      // './test/horizontal-center/*.js',
      // './test/fit/*.js',
      // './test/props/*.js',
      // './test/html/*.js',
      './test/**/*.html',
      {pattern:'./test/**/*.css', watched:true, included:false, served:true},
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.html': 'html2js',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: 'Chrome', 'Firefox','PhantomJS' 'Safari', 'IE'],
    browsers: browsers,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    client: {
      // mocha: {
      //   ui: 'bdd',
      //   reporter: 'dot',
      // },

      // grep 'test/suite names against this value'
      //args: ['--grep', 'vertical-center'],
      //args: ['--grep', 'horizontal-center'],
    },
  });
};
