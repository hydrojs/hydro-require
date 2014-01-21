/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'hydro-require',
    formatter: 'hydro-simple',
    plugins: [ require('./index') ],
    require: {
      'assert': 'simple-assert'
    },
    proxies: {
      test: 'addTest'
    },
    tests: [
      'test'
    ]
  });
};
