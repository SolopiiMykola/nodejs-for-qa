# Export/Import Module
1. Create **export-module.js** in root directory
2. Type ```console.log(module);```
3. Run **node export-module.js** command in terminal
4. Type ```
    module.exports.something; 
    console.log(module.exports)
    ```
5. Run **node export-module.js** command in terminal
6. Type ```
    module.exports.someKey = "someValue";
    console.log(module.exports)
    ```
7. Run **node export-module.js** command in terminal
8. Create **import-module.js** in root directory
9. Type ```
    const exportsObj = require("./export-module");
    console.log(exportsObj);
    ```
10. Run **node import-module.js** command in terminal