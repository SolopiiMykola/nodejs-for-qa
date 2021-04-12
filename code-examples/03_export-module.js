/*
  Every file in nodejs application consider as a module
  Variables and function will be scoped to that file
*/

/* 
  How to create and load module?
  Most of your projects will have more than one file in structure
  NodeJS allows to import/export data from one file to another using exports/require functions
*/

// Export - process of exposing file data to outside world
// Import - process of consuming file data in other file

// EXPORT

// Use global object - 'exports'
// Anything that we add to this object will be exported from this module and it will be avaliable outside of this module
console.log(module); // it's seems to be a global object but it's not a global
// you can see a json object with key pair
// don't worry about this properties as wy gradualyly become familiar with this properties
module.exports.something; 
console.log(module.exports) // {}

module.exports.something1 = "data1";

console.log(module.exports) // the object that we exporting here has a single key value pair  
// OR, the same
exports.something = "data"; 

let obj1 = {someData: "data"}
module.exports = obj1;

// export an array
module.exports = months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function someModule() {
    console.log("print some module")
}

module.exports.someModule = someModule // you can change exported name


// You can export a single function or an object

// One more take away here is that node does not execute our code directly
// It always wraps the code inside each module in something like this
// We call this function the Module Wrapper Function
(function (exports, require, module, __filename, __dirname) { // it's just for presentation
  console.log(__fileName)
  console.log(__dirname)
  function someModule() {
    console.log("print some module")
}

module.exports.someModule = someModule
})