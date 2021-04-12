# Node modules examples (OS, FS, Path)
1. Go to [nodejs modules](https://nodejs.org/api/modules.html)
1. Create **node-modules.js** file in the root directory
1. **OS module examples**
1. Type ```const os = require('os');```
1. Type: 
    ```js
    let totalMem = os.totalmem; 
    let freMem = os.freemem;
1. Type: 
    ```js
    console.log(`Total Memoty: ${totalMem}`);
    console.log(`Free Memoty: ${freMem}`);
1. Run **node node-modules.js**


### File System modules examples**
1. Comment out previous code
2. Type ```const fs = require('fs');```
3. Type 
    ```js
    let files = fs.readdirSync('./');
    console.log(files);
4. Run **node node-modules.js**
5. Type: 
    ```js
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

6. Comment out previous code
7. Run **node node-modules.js**


### Path Module examples**
1. Type: 
    ```js
    const path = require("path");
    console.log(path);
    let pathObj = path.parse('/app.js');
    console.log(pathObj);
1. Comment out previous code
1. Run **node node-modules.js**



