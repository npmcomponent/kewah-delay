var assert = require('assert');
var delay = require('../');

describe('delay()', function() {
  it('should be called 1s later', function(done) {
    this.timeout(510);
    delay(500)(function() {
      done();
    });
  });
});
