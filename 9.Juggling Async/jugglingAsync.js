const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const http = require('http');

function requestData(url) {
    http.get(url, (res) => {
        res.on('data', (data) => console.log(data));
        res.on('end', () => {})
    })
}