const port = process.argv[2];
const path = process.argv[3];

const fs = require('fs');
const http = require('http');

const stuffStream = fs.createReadStream(path);

const server = http.createServer((req, res) => {
    res.write(stuffStream.read());
});

server.listen(port);

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var fs = require('fs')
    
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ─────────────────────────────────────────────────────────────────────────────