// Promises are a way to handle asynchronous operations in JavaScript.An asynchronous operation is any task that doesn't immediately return a result, such as fetching data from a server or reading a file from disk. In traditional JavaScript, you would use callbacks to handle asynchronous operations, but Promises provide a cleaner and more intuitive way to do this.

// A Promise is an object that represents the eventual completion(or failure) of an asynchronous operation and allows you to attach callbacks to be executed when the operation completes.A Promise has three states:

// Pending: The initial state, before the operation completes.
// Fulfilled: The operation completed successfully and the result is available.
// Rejected: The operation failed and an error is available.
// Here's an example of how to create a Promise in JavaScript:


// const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
     // ...
//     if (/* operation was successful */) {
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });

// In this example, we create a new Promise object that performs some asynchronous operation.The resolve function is called when the operation completes successfully and the reject function is called when the operation fails.

// Here's an example of how to use a Promise in JavaScript:


// myPromise.then(result => {
    // Handle successful completion
// }).catch(error => {
    // Handle error
// });

// In this example, we attach a then callback to the Promise object to handle the successful completion of the operation.We also attach a catch callback to handle any errors that occur during the operation.

// Promises can also be chained together using the then method.This allows you to perform a series of asynchronous operations in sequence, with each operation depending on the successful completion of the previous operation.

// Here's an example of how to chain Promises in JavaScript:


// myPromise
//     .then(result => {
        // Perform another asynchronous operation
        // ...
//         return anotherPromise;
//     })
//     .then(result => {
         // Perform another asynchronous operation
        // ...
//     })
//     .catch(error => {
       // Handle error
//     });

// In this example, we use the then method to chain together multiple Promises.The second Promise(anotherPromise) is returned from the first Promise's then callback, and its completion is dependent on the successful completion of the first Promise. The third Promise is similarly dependent on the successful completion of the second Promise.