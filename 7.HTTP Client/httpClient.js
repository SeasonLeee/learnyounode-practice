const http = require('http');

const processArgv = process.argv;

// let requestingUrl = 'http://jsonplaceholder.typicode.com/todos/1';

let requestingUrl = processArgv[2];

http.get(requestingUrl, (res) => {
    res.on('data', (data) => console.log(data.toString()))
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)

// ─────────────────────────────────────────────────────────────────────────────