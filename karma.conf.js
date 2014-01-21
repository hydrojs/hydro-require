module.exports = function(config) {
  config.set({
    frameworks: [ 'hydro' ],
    singleRun: true,
    browsers: [
      'PhantomJS',
      'Chrome',
      'Firefox',
      'Safari'
    ],
    files: [
      'test/*.js'
    ],
    hydro: {
      before: [
        'build/build.js',
      ]
    },
    client: {
      hydro: {
        setup: true,
        suite: 'hydro-require',
        plugins: [ 'hydro-require' ],
        proxies: {
          test: 'addTest'
        },
        require: {
          'assert': 'simple-assert'
        },
      }
    },
  });
};
