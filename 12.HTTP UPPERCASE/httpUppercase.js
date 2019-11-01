const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.on('data', (data) => {
            res.write(data.toString().toUpperCase());
        });
    }
});

server.listen(port);

/// well, I finish this challenge and so many challenge before without
/// actually knowing what's actually going on...
/// what the fuck...

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var map = require('through2-map')
    
//     var server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ─────────────────────────────────────────────────────────────────────────────