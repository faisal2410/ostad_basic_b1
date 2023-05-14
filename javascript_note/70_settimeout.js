// setTimeout is a function that allows you to delay the execution of a function for a specified amount of time(in milliseconds).It takes two arguments: a callback function to execute after the delay, and the delay time in milliseconds.Here's an example:


// setTimeout(() => {
//     console.log('Delayed function');
// }, 1000); // Execute the function after a delay of 1000 milliseconds (1 second)
// setInterval is a function that allows you to repeatedly execute a function with a fixed time delay between each execution.It takes two arguments: a callback function to execute, and the delay time in milliseconds.Here's an example:


// let count = 0;
// const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
// }, 1000); // Execute the function every 1000 milliseconds (1 second)

// To stop the interval, call clearInterval with the interval ID

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000); // Stop the interval after 5 seconds

// clearInterval is a function that allows you to stop a running setInterval timer.It takes one argument: the interval ID returned by setInterval.Here's an example:


// const intervalId = setInterval(() => {
//     console.log('Repeating function');
// }, 1000); // Execute the function every 1000 milliseconds (1 second)

// // To stop the interval, call clearInterval with the interval ID
// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000); // Stop the interval after 5 seconds

// In summary, setTimeout allows you to delay the execution of a function, setInterval allows you to repeatedly execute a function with a fixed delay, and clearInterval allows you to stop a running interval timer.