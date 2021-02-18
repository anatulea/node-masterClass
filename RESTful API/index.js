/*
*
*Primary file for the API
*
*/

// Dependencies
const http = require('http');
const url = require('url');

// Configure the server to respond to all requests with a string
const server = http.createServer(function(req, res){
    // Get the url and parse it
    let parsedUrl = url.parse(req.url, true); // url.parse() Stability: 0 - Deprecated: Use the WHATWG URL API instead.

    // Get the path 
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the http method
    const method =  req.method.toLowerCase()


    // Send the response
    res.end('Hello world!\n');
    
    // Log the request path
    console.log('Request received on path: '+trimmedPath+ ' with the method: '+method);
});
// Start the server
server.listen(3000, function(){
    console.log('The server is listening on port 3000 now');
});