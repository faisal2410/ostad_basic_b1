// In JavaScript, there are three ways to declare variables: var, let, and const.Each of them has its own behavior and scope.

//     var:

// var was the original way to declare variables in JavaScript.It has a function scope, which means that the variable is accessible within the function it's declared in, or the global scope if it's declared outside of any function.


// function example() {
//     var x = 5;
//     console.log(x); // Output: 5
// }

// console.log(x); // Output: ReferenceError: x is not defined
// var variables can also be re-declared and reassigned:


// var x = 5;
// var x = 10; // Re-declaring a variable with var is allowed
// x = 15; // Reassigning a variable with var is allowed
// let:

// let was introduced in ES6 as a new way to declare variables in JavaScript.It has a block scope, which means that the variable is accessible within the block it's declared in, including inner blocks.


// function example() {
//     let x = 5;
//     if (true) {
//         let x = 10;
//         console.log(x); // Output: 10
//     }
//     console.log(x); // Output: 5
// }

// console.log(x); // Output: ReferenceError: x is not defined
// let variables can be reassigned but cannot be re-declared:


// let x = 5;
// let x = 10; // Error: Identifier 'x' has already been declared
// x = 15; // Reassigning a variable with let is allowed
// const:

// const is another way to declare variables in JavaScript that was introduced in ES6.It also has a block scope like let, but once a const variable is declared, it cannot be reassigned or re-declared:


// const x = 5;
// x = 10; // Error: Assignment to constant variable
// const x = 10; // Error: Identifier 'x' has already been declared
// However, if a const variable is an object or an array, its properties or elements can be modified:


// const person = { name: "John" };
// person.name = "Jane"; // Modifying a property of a const object is allowed
// console.log(person); // Output: { name: "Jane" }

// In summary, var has a function scope, let and const have a block scope, let variables can be reassigned but not re-declared, const variables cannot be reassigned or re-declared, but their properties can be modified if they are objects or arrays.



