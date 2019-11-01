const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {

    // console.log(req);

    if (req.method === 'POST') {
        req.on('data', (data) => console.log(data.toString().toUpperCase()));
    }
    // res.end('hahaha');
});

server.listen(port);

// console.log('jianglin lalala'.toUpperCase);