// console.log(process.argv)

let inputArgv = process.argv;

let sumOfNumArgv = inputArgv.filter(
    element => !element.includes('/') // get all the number which still in string type
    ).map(
        element => Number(element) // get all the number in Number type
        ).reduce(
            (pre, cur) => pre + cur // add up all the number
            );

console.log(sumOfNumArgv);


//  Here's the official solution in case you want to compare notes:

//  ─────────────────────────────────────────────────────────────────────────────
// var result = 0
    
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)