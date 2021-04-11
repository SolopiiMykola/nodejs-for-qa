# Node modules examples (OS, FS, Path)
1. Go to [nodejs modules] https://nodejs.org/api/modules.html
2. Create **node-modules.js** file in the root directory
3. **OS module examples**
4. Type ```const os = require('os');```
5. Type ```js 
    let totalMem = os.totalmem; 
    let freMem = os.freemem;
6. Type ```js
    console.log(`Total Memoty: ${totalMem}`);
    console.log(`Free Memoty: ${freMem}`);
7. Run **node node-modules.js**


8. **File System modules examples**
9. Comment out previous code
10. Type ```const fs = require('fs');```
11. Type ```js
    let files = fs.readdirSync('./');
    console.log(files);
12. Run **node node-modules.js**
13. Type ```js
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
14. Comment out previous code
15. Run **node node-modules.js**



16. **Path Module examples**
17. Type ```js
    const path = require("path");
    console.log(path);
    let pathObj = path.parse('/app.js');
    console.log(pathObj);
18. Comment out previous code
19. Run **node node-modules.js**



