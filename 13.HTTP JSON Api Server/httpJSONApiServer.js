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