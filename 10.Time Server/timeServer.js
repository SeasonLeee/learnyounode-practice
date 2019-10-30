const net = require('net');

const port = process.argv[2];

const superDate = new Date();

// const year = superDate.getFullYear();
// const month = superDate.getMonth();
// const date = superDate.getDate();
// const hours = superDate.getHours();
// const minutes = superDate.getMinutes();


// console.log(`${year}-${month > 10 ? month : '0' + month }-${date > 10 ? date : '0' + date } ${hours > 10 ? hours : '0' + hours }:${minutes > 10 ? minutes : '0' + minutes }`);

const server = net.createServer((c) => {
    const year = superDate.getFullYear();
    const month = Number(superDate.getMonth()) + 1;
    const date = superDate.getDate();
    const hours = superDate.getHours();
    const minutes = superDate.getMinutes();

    // console.log('Server Connected');
    // c.on('end', () => console.log('Connection closed'));
    // c.write('Hey there!');
    c.end(`${year}-${month >= 10 ? month : '0' + month }-${date >= 10 ? date : '0' + date } ${hours >= 10 ? hours : '0' + hours }:${minutes >= 10 ? minutes : '0' + minutes }\n`);
    // c.end();
});

server.listen(port, () => {});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var net = require('net')
    
//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }
    
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }
    
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
    
//     server.listen(Number(process.argv[2]))

// ─────────────────────────────────────────────────────────────────────────────