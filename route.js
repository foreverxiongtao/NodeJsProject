function router(handle, path, response, request) {
    if (typeof handle[path] === 'function') {
        handle[path](response,request);
    }
    else {
        console.log("No request handler found for " + path);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.router = router;
