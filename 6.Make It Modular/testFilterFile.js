// function filterFile(params) {
//     const fs = require('fs');
//     const path = require('path');

//     const processArgv = process.argv;

//     const filePath = processArgv[2];
//     const targetType = processArgv[3];

//     fs.readdir(filePath, (err, res) => {
//         if (err) console.error(err);

//         let result = res.filter(e => path.extname(e) === '.' + targetType);

//         result.forEach(e => console.log(e));
//     });
// }
const filterFile = require('./filteredFile');

// console.log(filterFile());

const processArgv = process.argv;

const filePath = processArgv[2];
const targetType = processArgv[3];

filterFile(filePath, targetType, (err, res) => {
    if (err) console.error(err);

    res.forEach(element => {
        console.log(element)
    });

    // console.log(typeof res);
})