const http = require('http');

const requestUrl = process.argv[2];

let requestedRes = ''

http.get(requestUrl, (res) => {
    res.on('data', (data) => requestedRes += data);
    res.on('end', () => {
        console.log(requestedRes.length);
        console.log(requestedRes);        
    });
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })

// ─────────────────────────────────────────────────────────────────────────────