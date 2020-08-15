/* A tutorial I'm taking from w3schools!*/
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(128);