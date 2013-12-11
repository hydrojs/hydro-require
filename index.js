/**
 * Auto require modules before running
 * the tests.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var requires = hydro.get('require');
  if (!requires) return;
  if (!Array.isArray(requires)) requires = [requires];

  requires.forEach(function(req) {
    require(req);
  });
};

/**
 * CLI flags.
 */

module.exports.flags = {
  '--require': 'require module'
};
