function version(r) {
    r.return(200, njs.version);
}

var fs = require('fs');
var STORAGE = "/tmp/njs/starter.zip"

function save(r) {
    function done(reply) {
        r.log("Processing");
        r.headersOut['Content-Type'] = ['text/plain'];
        fs.writeFileSync(STORAGE, reply.responseBody);
        r.return(200, "OK");
    }
    var options = {
        args: r.variables.args
    };
    r.subrequest('/generate', options, done);
}