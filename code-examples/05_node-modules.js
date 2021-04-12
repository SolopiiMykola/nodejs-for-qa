// OS module
const os = require('os');

let totalMem = os.totalmem; 
let freMem = os.freemem;

// Template string
console.log(`Total Memoty: ${totalMem}`);
console.log(`Free Memoty: ${freMem}`);

// File System
const fs = require('fs');

// Pay attention is it a async or sync method
// Prefer to use async method as it non-blocking
// In automation you need to wotk with sync methods

// Lets see how fs.readdirSync looks like:
let files = fs.readdirSync('./');
console.log(files);

// Lets see how fs.readFile looks like:
let file = fs.readFile(
    // relative path to file
    `./app.js`,
    // reading options
    { encoding: "UTF8" },
    // special function called callback:
    function(err, content) {
        if (err) console.log('Error', err)
        else console.log('Content', content);
    }
  );

  console.log(file)

// Path module
const path = require("path"); // Object with a banch of usefull methods


console.log(path);

let pathObj = path.parse('/app.js');

console.log(pathObj);

// If you want working with path is much easyer working with path instead of string