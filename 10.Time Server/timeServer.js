const net = require('net');

const port = process.argv[2];

const superDate = new Date();

const year = superDate.getFullYear();
const month = superDate.getMonth();
const date = superDate.getDate();
const hours = superDate.getHours();
const minutes = superDate.getMinutes();


console.log(`${year}-${month > 10 ? month : '0' + month }-${date > 10 ? date : '0' + date } ${hours > 10 ? hours : '0' + hours }:${minutes > 10 ? minutes : '0' + minutes }`);

const server = net.createServer((c) => {
    // console.log('Server Connected');
    // c.on('end', () => console.log('Connection closed'));
    // c.write('Hey there!');
    c.write(`${year}-${month > 10 ? month : '0' + month }-${date > 10 ? date : '0' + date } ${hours > 10 ? hours : '0' + hours }:${minutes > 10 ? minutes : '0' + minutes }`);
    c.end();
});

server.listen(port, () => {});