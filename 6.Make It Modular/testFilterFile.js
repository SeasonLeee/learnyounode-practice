const filterFile = require('./filteredFile');

const processArgv = process.argv;

const filePath = processArgv[2];
const targetType = processArgv[3];

filterFile(filePath, targetType, (err, res) => {
    if (err) console.error(err);

    res.forEach(element => console.log(element));

})

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────
//  _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
//  on/solution.js_ :


// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//     if (err) {
//         return console.error('There was an error:', err)
//     }

//     list.forEach(function (file) {
//         console.log(file)
//     })
// })