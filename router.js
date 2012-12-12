function route(handle, pathname, response) {
    console.log("In comes a request for " + pathname);
    
    if (typeof(handle[pathname]) === 'function') {
        return (handle[pathname](response));
    }
    else {
        console.log("There is no request handler for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
    
}

exports.route = route;