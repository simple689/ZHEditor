var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello nodeJS');
}).listen(6989, 'localhost', function() {
    console.log('Server running at http://localhost:6989');
})