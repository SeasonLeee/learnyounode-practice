const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        const parsedUrl = url.parse(req.url);
        const requestingUrl = parsedUrl.pathname;

        const getReqValue = parsedUrl.query.split('=')[1];
        const getReqValueAsDate = new Date(getReqValue);

        // console.log('parsedUrl = ', parsedUrl);

        // console.log('getReqValueAsDate = ', typeof getReqValueAsDate);

        // console.log('requestingUrl = ', requestingUrl);

        switch (requestingUrl) {
            case '/api/parsetime':

                const resultToSend1 = {
                    'hour': getReqValueAsDate.getHours(),
                    'minute': getReqValueAsDate.getMinutes(),
                    'second': getReqValueAsDate.getSeconds(),
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });

                res.end(JSON.stringify(resultToSend1));

                break;
            case '/api/unixtime':

                const resultToSend = {
                    'unixtime': getReqValueAsDate.getTime()
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });

                res.end(JSON.stringify(resultToSend));

                break;
        }
    }
});

server.listen(port);

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var url = require('url')
    
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
    
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
    
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
    
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))

// ─────────────────────────────────────────────────────────────────────────────
//  You've finished all the challenges! Hooray!

// ─────────────────────────────────────────────────────────────────────────────