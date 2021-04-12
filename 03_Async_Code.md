# How NodeJS works?
1. Create **async-code.js** file in root directory
2. Type:
    ```js
    console.log("1) App start");

    setTimeout(() => {
        console.log('2) Inside first callback');
    }, 2000);

    setTimeout(() => {
        console.log('3) Inside second callback');
    }, 0);

    console.log("4) Finish app");
3. Run **node async-code.js**