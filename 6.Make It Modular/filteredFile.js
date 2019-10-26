
/**
 *
 * @param {path to the file} filePath
 * @param {target file name extension} ext
 * @param {callback function to handle the former two} callback
 *
 */
function filterFile(filePath, ext, callback) {
    const fs = require('fs');
    const path = require('path');

    // const processArgv = process.argv;

    const fb = filePath;
    const targetType = ext;

    fs.readdir(fb, (err, res) => {
        if (err) return callback(err);

        let result = res.filter(e => path.extname(e) === '.' + targetType);

        // result.forEach(e => callback(e));

        callback(null, result);
    });

    // fs.readdir(fb, callback(err, res))
}

module.exports = filterFile;


// Here's the official solution in case you want to compare notes:
// ─────────────────────────────────────────────────────────────────────────────
//  _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
//  on/solution_filter.js_ :


//     var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }
