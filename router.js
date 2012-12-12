function route(handle, pathname) {
    console.log("In comes a request for " + pathname);
    
    if (typeof(handle[pathname] === 'function')) {
        handle[pathname]();
    }
    else {
        console.log("There is no request handler for " + pathname);
    }
    
}

exports.route = route;