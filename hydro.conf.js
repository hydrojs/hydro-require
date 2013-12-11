/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var req = require('./index');

  hydro.set({
    plugins: [req],
    require: ['should'],
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-require',
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test'
    ]
  });
};
