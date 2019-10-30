const urlArr = []

for (let i = 2; i <= 4; i++) {
    urlArr.push(process.argv[i]);
}

const http = require('http');

/// The following are for my own test....
// console.log('urlArr.length = ', urlArr.length);

// for (let i = 0; i < urlArr.length; i++) {
//     console.log('urlArr[i] = ', urlArr[i]);

//     urlArr[i] = `http://jsonplaceholder.typicode.com/todos/${i + 1}`;

//     console.log('urlArr[i] = ', urlArr[i]);
// }

/// The following are for first attempt of test the parallel stuff...
/// or making the request one after another...
/// well... I failed... not sure the reason why...
/// but I managed to find out soon... soon... 😁
// function requestData(urlArr) {
//     return http.get(urlArr[0], (res) => {
//         res.on('data', (data) => console.log(data.toString()));
//         res.on('end', requestData(urlArr))
//     })
// }

// requestData(urlArr[0]).end(
//     requestData(urlArr[1]).end(
//         requestData(urlArr[2])));

let resOfUrl1 = '', resOfUrl2 = '', resOfUrl3 = '';

http.get(urlArr[0], (res) => {
    res.on('data', (data) => resOfUrl1 += data.toString());
    res.on('end', () => {
        console.log(resOfUrl1);
        http.get(urlArr[1], (res2) => {
            res2.on('data', (data) => resOfUrl2 += data.toString());
            res2.on('end', () => {
                console.log(resOfUrl2);
                http.get(urlArr[2], (res) => {
                    res.on('data', (data) => resOfUrl3 += data);
                    res.on('end', () => {
                        console.log(resOfUrl3);
                        // console.log('DONE!');
                    })
                });
            })
        });
    })
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
    
//           results[index] = data.toString()
//           count++
    
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }

// ─────────────────────────────────────────────────────────────────────────────