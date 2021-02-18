/*
*
*Primary file for the API
*
*/

// Dependencies
const http = require('http');

// Configure the server to respond to all requests with a string
const server = http.createServer(function(req, res){
    res.end('Hello world!\n')
})
// Start the server
server.listen(3000, function(){
    console.log('The server is listening on port 3000 now')
})