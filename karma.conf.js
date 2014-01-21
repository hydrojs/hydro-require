module.exports = function(config) {
  var browsers = process.env.TRAVIS
    ? [ 'PhantomJS' ]
    : [ 'PhantomJS', 'Chrome', 'Firefox', 'Safari' ];

  config.set({
    frameworks: [ 'hydro' ],
    singleRun: true,
    browsers: browsers,
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
