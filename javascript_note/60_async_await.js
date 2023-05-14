// Async / await is a syntax feature in JavaScript that allows you to write asynchronous code in a more synchronous style.It is built on top of promises, which are a way to handle asynchronous operations in JavaScript.

// Let's start with an example of a function that returns a promise:


// function myPromiseFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello world!");
//         }, 1000);
//     });
// }

// In this example, we define a function myPromiseFunction that returns a promise.The promise resolves after a delay of one second with the value "Hello world!".

// Now let's use async/await to handle the promise:


// async function myAsyncFunction() {
//     const result = await myPromiseFunction();
//     console.log(result);
// }

// In this example, we define an async function myAsyncFunction. Inside the function, we use the await keyword to wait for the promise returned by myPromiseFunction to resolve.Once the promise resolves, we assign the result to a variable result.Finally, we log the result to the console.

// The await keyword can only be used inside an async function, so we define myAsyncFunction as an async function.

// Here's an example of using try/catch with async/await:


// async function myAsyncFunction() {
//     try {
//         const result = await myPromiseFunction();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// In this example, we use a try/catch block to handle any errors that may occur while waiting for the promise to resolve. If an error occurs, we log it to the console using console.error.

// Async / await can also be used with multiple promises.Here's an example of using Promise.all with async/await:


// async function myAsyncFunction() {
//     const results = await Promise.all([myPromiseFunction1(), myPromiseFunction2(), myPromiseFunction3()]);
//     console.log(results);
// }

// In this example, we use Promise.all to wait for all three promises to resolve before continuing.The results of all three promises are returned as an array, which we assign to a variable results.Finally, we log the results to the console.

// Overall, async / await is a powerful feature in JavaScript that makes writing asynchronous code easier and more readable.