console.log("Hi, I'm lovely NodeJS output");

function sayHelloToNode(name) {
    console.log('Hello Node, my name is ' + name);
}

sayHelloToNode('Mykola');

/* 
   You can't run browser specific objects and their methods, like window, document, navigator, screen
   JavaScript Browser Objects Examples: https://www.w3schools.com/js/js_ex_browser.asp
*/
console.log(window); // window is not defined
alert('Lol')
prompt('Lol')

// console.log(); // global
// setTimeout(); 
// clearTimeOut();

// setInterval();
// clearInterval;

// window.console.log();

let message = ''
global.setInterval // 

console.log(global.message); // undefined


let sayHelloToNode = function() {

}

window.sayHelloToNode();

console.log(__fileName)
console.log(__dirname)

/*
  In real world application we split js code in multiple files
  In several files sayHelloToNode() can be defined with the same name
  As sayHelloToNode() added to global scope, new definition will override the previous definition 
  This is a problem with the global scope
  In order to build reliable application we need to avoid defined variables and function in global scope
  We need to build a module block where we can define the variables and functions
  So two function with the same name don't override the same definition someone else

  The core of node - is a module consept
  So every file in nodejs application consider as a module
  Variables and function will be scoped to that file
  In OOP we cal it "private" it's not avaliable outside container If you want need to make it public, you need to explicitly export it and make it public
  Example with Iphone
  In this case app.js is our main module now 
*/