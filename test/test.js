test('require works', function() {
  if (typeof assert === 'undefined') {
    throw new Error('expected assert to be required and global');
  }
});
