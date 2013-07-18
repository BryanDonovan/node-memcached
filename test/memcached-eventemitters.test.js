var async = require('async');
var common = require('./common');
var Memcached = require('../');

describe("memcached event listeners", function() {
    it("should not trigger 'EventEmitter memory leak detected' warning", function(done) {
        var qty = 11;
        var count = 0;

        function complete() {
            return count === qty;
        }

        async.until(complete, function(cb) {
            var memcached = new Memcached(common.servers.single);
            memcached.touch('key', 10, function(err) {
                memcached.end();
                count++;
                cb();
            });
        }, done);
    });
});
