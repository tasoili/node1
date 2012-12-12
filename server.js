var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathName;
        
        route(pathName);
        
        console.log("Request received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
    console.log("server has started");
}

exports.start = start;