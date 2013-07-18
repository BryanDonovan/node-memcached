var common = require('./common')
  , Memcached = require('../');

describe("memcached event listeners", function() {
  it("should not trigger 'EventEmitter memory leak detected' warning", function() {
    var qty = 11;
    for (var i = 0; i < qty; i++) {
      var memcached = new Memcached(common.servers.single);
      memcached.touch('key', 10, function (err) { });
    }
  });
});
