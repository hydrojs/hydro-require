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
    require: {
      'assert': 'assert'
    },
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-require',
    formatter: 'hydro-simple',
    tests: [
      'test'
    ]
  });
};
