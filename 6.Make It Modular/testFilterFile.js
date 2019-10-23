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
