var cgi = require('cgi');
var http = require('http');
var path = require('path');
 
var script = path.resolve('newnews.cgi');
 
http.createServer( cgi(script) ).listen(8080);