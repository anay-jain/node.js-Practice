// creating a server 

var http = require('http')

var server = http.createServer(function(req , res ){
    res.writeHead(200 , {'content-type' : 'text/plain' })
    res.end("hello , listening from another world")
});

server.listen(3000, '127.0.0.1');
console.log("hello , listening from port 3000")