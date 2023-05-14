// In JavaScript, scope refers to the area of a program where a particular variable or function is accessible.JavaScript has two types of scope: global scope and local scope.

// Global scope refers to variables or functions that are accessible throughout the entire program.Variables declared outside of any functions have global scope and can be accessed from anywhere in the program.Global variables can also be declared explicitly using the window object, which represents the global scope in a browser environment.

// Local scope refers to variables or functions that are only accessible within a specific block of code, such as a function or loop.Variables declared inside a function have local scope and cannot be accessed outside of the function. This is known as function scope.JavaScript also has block scope, which refers to variables declared inside a block of code enclosed by curly braces { }.Block - scoped variables are only accessible within that block of code.

//     It's important to note that variables declared without the var, let, or const keyword are automatically assigned to the global scope, which can lead to unintended consequences and bugs in your code. Therefore, it's generally recommended to always declare variables with the appropriate keyword and to use local scope whenever possible to avoid conflicts and maintain code readability and maintainability.

// Here is an example of how scope works in JavaScript:


// var globalVar = "I am a global variable";

// function exampleFunction() {
//     var localVar = "I am a local variable";
//     console.log(localVar); // Output: "I am a local variable"
//     console.log(globalVar); // Output: "I am a global variable"
// }

// console.log(localVar); // Output: Uncaught ReferenceError: localVar is not defined

// In this example, globalVar has global scope and can be accessed from anywhere in the program.localVar has local scope and can only be accessed within the exampleFunction() function. When we try to access localVar outside of the function, we get a ReferenceError because it is not defined in that scope.