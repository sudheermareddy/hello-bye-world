var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Happy Mayend.....!");

});

var port = 5000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


// my comments on this file
