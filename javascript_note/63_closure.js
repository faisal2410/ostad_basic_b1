// A closure is a feature in JavaScript that allows a function to access variables from an outer(enclosing) function, even after the outer function has returned.This means that the inner function "closes over" the variables of the outer function, creating a persistent reference to those variables.

// Here's an example to illustrate how closures work:


// function outer() {
//     const name = 'John';

//     function inner() {
//         console.log(`Hello, ${name}!`);
//     }

//     return inner;
// }

// const greeting = outer();
// greeting();

// In this example, we define two functions: outer and inner.outer declares a variable name and defines the inner function, which logs a message that uses the name variable.

// The outer function returns the inner function, which is assigned to the greeting variable.Finally, we call the greeting function, which logs "Hello, John!" to the console.

// Even though the outer function has returned and its variables should be out of scope, the inner function is still able to access the name variable.This is because the inner function has a closure over the name variable, creating a persistent reference to it.

// Closures can be very powerful and useful in JavaScript, allowing you to create functions that have private variables and state that can be accessed and modified only by the function itself. They can also be used to create higher - order functions, which are functions that take other functions as arguments and / or return functions as their result.

//     Overall, understanding closures is an important concept in JavaScript and can help you write more expressive and powerful code.