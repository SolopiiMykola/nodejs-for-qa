// To import something from other file in NodeJS - use global 'require' function

// Accepts one parameter - relative path to file, .js can be skipped
// Define import statement on the top of page
const exportsObj = require("./03_export-module");

console.log(exportsObj);