const fs = require('fs');
const path = require('path');

const processArgv = process.argv;

// console.log(processArgv);

// the first two element of this array is reserved for system use
const filePath = processArgv[2];
const targetType = processArgv[3];

fs.readdir(filePath, (err, res) => {
    if (err) throw err;

    // console.log(res);

    let result = res.filter(e => path.extname(e) === '.' + targetType);

    // console.log(result);

    result.forEach(e => console.log(e));
});

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var fs = require('fs')
//     var path = require('path')
    
//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })

// ─────────────────────────────────────────────────────────────────────────────