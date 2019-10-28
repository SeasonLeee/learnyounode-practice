let fs = require('fs');

// console.log(fs);

// file location as second argument
let filePath = process.argv[2];

let fileReadBuffer = fs.readFileSync('./test-file.txt'); // readFileSync() returns Buffer

// let fileReadBuffer = fs.readFileSync(filePath);

// console.log(fileReadBuffer.toString());

/// split read file String(Buffer previous)
/// based on new line character \n
/// then return the length of this array
let arrOfNewLines = fileReadBuffer.toString().split('\n'); 

// console.log(arrOfNewLines);

console.log(arrOfNewLines.length);

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var fs = require('fs')
    
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
    
//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1