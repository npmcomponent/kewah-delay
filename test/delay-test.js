var assert = require('assert');
var delay = require('../');

describe('delay()', function() {
  it('should be called 1s later', function(done) {
    var d = Date.now();

    delay(1000)(function() {
      var delta = Date.now() - d;
      assert(delta > 1000 && delta < 1020);
      done();
    });
  });
});