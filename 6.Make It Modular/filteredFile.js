
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
        if (err) callback(err);

        let result = res.filter(e => path.extname(e) === '.' + targetType);

        // result.forEach(e => callback(e));

        callback(null, result);
    });

    // fs.readdir(fb, callback(err, res))
}

module.exports = filterFile;