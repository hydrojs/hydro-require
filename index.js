/**
 * Root.
 */

var browserRequire = typeof window !== 'undefined'
  ? window.require
  : null;

var load = browserRequire ? browserRequire : require;

/**
 * Auto require modules before running
 * the tests and make them global.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var requires = hydro.get('require');
  if (!requires) return;

  for (var key in requires) {
    if (!requires.hasOwnProperty(key)) continue;
    hydro.set('globals', key, load(requires[key]));
  }
};
