console.log("1) App start");

// setTimeout means run this function in 2 second, not immediately
setTimeout(() => {
    console.log('2) Inside first callback');
}, 2000);

// call back will be called after all sync operation finished
setTimeout(() => {
    console.log('3) Inside second callback');
}, 0);

console.log("4) Finish app");


/* 
    So Node.js runs things in parallel for you, if you give it a chance. 
    “ So use asynchronous methods ”!!!
    Node.js uses a pre-allocated set of threads called a thread pool, 
    and if we do not specify how many threads to open, it will open 4 threads by default. 
    Node.js works with multiple threads! Yes! Its multi-threaded!
*/
