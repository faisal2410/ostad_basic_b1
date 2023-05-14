// Currying is a technique where a function that takes multiple arguments is transformed into a series of functions that take one argument each.The result is a function that can be partially applied, meaning that some of its arguments can be fixed in advance, leaving a new function that takes only the remaining arguments.This can be useful when you need to reuse a function with the same arguments multiple times.

//     Here's an example of a curried function in JavaScript:


// function add(x) {
//     return function (y) {
//         return x + y;
//     };
// }
// This function takes one argument, x, and returns a new function that takes one argument, y, and returns the sum of x and y.Here's how you can use this function:

// let add5 = add(5); // This creates a new function that adds 5 to its argument.
// console.log(add5(3)); // Output: 8
// console.log(add5(7)); // Output: 12
// In this example, we first create a new function add5 by calling add with the argument 5. This returns a new function that takes one argument, y, and returns the sum of 5 and y.We can then call add5 with different values for y, and each call will return the sum of 5 and the value of y.

// The benefit of using currying is that we can create reusable functions that are tailored to a specific use case. In this example, we created a function that adds 5 to its argument, but we could easily create a function that adds any other number by passing a different argument to add.

// Another benefit of currying is that it can make it easier to compose functions.By breaking down a function into smaller functions that take one argument each, we can combine them in different ways to create new functions that perform more complex tasks.