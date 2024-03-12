// Create web server
// 1. Load the http module
var http = require('http');
// 2. Create a web server
http.createServer(function(request, response) {
  // 3. Content type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // 4. Send response body "Hello World"
  response.end('Hello World\n');
}).listen(8080);
console.log('Server running at http://');
