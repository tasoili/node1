var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(process.env.PORT || 8000, process.env.IP);
    console.log("server has started");
}

exports.start = start;