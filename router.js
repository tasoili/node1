function route(handle, pathname) {
    console.log("In comes a request for " + pathname);
    
    if (typeof(handle[pathname]) === 'function') {
        return (handle[pathname]());
    }
    else {
        console.log("There is no request handler for " + pathname);
        return "404 Not Found";
    }
    
}

exports.route = route;