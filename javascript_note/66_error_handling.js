// Error handling is an important aspect of writing robust and reliable JavaScript code.It involves detecting and handling errors that may occur during the execution of your code.

// JavaScript provides a try-catch block for error handling.Here's an example of how it works:


// try {
     // Code that might throw an error
// } catch (error) {
    // Code to handle the error
//     }

// In this example, we wrap the code that might throw an error inside a try block.If an error occurs during the execution of this code, control is transferred to the catch block.The error parameter in the catch block contains information about the error that occurred.

// Here's an example of how you can use try-catch for error handling:


// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error('Cannot divide by zero');
//         }
//         return a / b;
//     } catch (error) {
//         console.log('Error:', error.message);
//     }
// }

// console.log(divide(10, 0)); // Outputs "Error: Cannot divide by zero"
// console.log(divide(10, 2)); // Outputs 5

// In this example, we define a function divide that takes two arguments a and b.We wrap the code that might throw an error(dividing by zero) inside a try block.If an error occurs, we throw a new Error object with a message.

// In the catch block, we log the error message to the console.If no error occurs, we return the result of the division.

// JavaScript also provides a finally block that is executed after the try and catch blocks, regardless of whether an error occurred or not.Here's an example of how it works:


// try {
     // Code that might throw an error
// } catch (error) {
    // Code to handle the error
// } finally {
     // Code to be executed regardless of whether an error occurred or not
// }

// In summary, error handling is an important part of writing robust and reliable JavaScript code.The try-catch block is a powerful tool for detecting and handling errors that may occur during the execution of your code.