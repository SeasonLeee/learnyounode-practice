// import * as fs from 'fs';
const fs = require('fs');

fs.readFile('./test-file.txt', (err, data) => {
    if (err) throw err;
    console.log(data
        .toString() // convert buffer to string
        .split('\n') // split the string to array based on \n
        .length); // get the num of element of array
        // then we have the num of new lines
})

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var fs = require('fs')
//     var file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })

// ─────────────────────────────────────────────────────────────────────────────