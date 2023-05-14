// Asynchronous programming is a way of writing code that allows multiple tasks to be executed simultaneously without blocking the execution of other tasks.In JavaScript, asynchronous programming is typically done using callbacks, promises, or async / await.

// Callbacks:
// Callbacks are functions that are passed as arguments to other functions and are called when an asynchronous operation is complete.For example, the setTimeout() function takes a callback function as an argument, which is called after a certain amount of time has passed.

 
// setTimeout(() => {
//     console.log('Hello, world!');
// }, 1000);
// Promises:
// Promises are objects that represent a value that may not be available yet, but will be resolved in the future.Promises have two states: pending and fulfilled or rejected.Promises can be chained together to create a sequence of asynchronous operations.

   
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 if (response.ok) {
//                     resolve(response.json());
//                 } else {
//                     reject(new Error('Failed to fetch data'));
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// };

// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// Async / await:
// Async / await is a newer syntax for asynchronous programming in JavaScript that makes code easier to read and write.Async functions return a promise, and the await keyword is used to wait for a promise to be resolved before continuing execution.

  
// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//         } else {
//             throw new Error('Failed to fetch data');
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };

// fetchData();
// In summary, asynchronous programming in JavaScript allows for non - blocking execution of tasks, and can be achieved using callbacks, promises, or async / await.Each method has its own strengths and weaknesses, and the choice of which to use depends on the specific use case.