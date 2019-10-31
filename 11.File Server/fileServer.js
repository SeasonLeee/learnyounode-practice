const port = process.argv[2];
const path = process.argv[3];

const fs = require('fs');
const http = require('http');

const stuffStream = fs.createReadStream(path);

const server = http.createServer((req, res) => {
    res.write(stuffStream.read());
});

server.listen(port)