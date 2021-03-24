/* A tutorial I'm taking from w3schools! URL: https://www.w3schools.com/nodejs/nodejs_http.asp */
var http = require('http');
var dt = require('./project1-module');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log("Server is running on localhost:128");
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(128);
