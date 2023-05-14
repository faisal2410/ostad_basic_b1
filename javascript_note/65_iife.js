// IIFE stands for Immediately Invoked Function Expression.It is a function that is defined and immediately called, creating a self - contained scope that can be used to avoid polluting the global scope with variables and functions.

//     Here's an example of an IIFE:


//     (function () {
//         var x = 10;
//         console.log(x);
//     })();
// In this example, we define an anonymous function using the syntax(function () { /* function code here */ }).We then immediately call this function by adding() at the end, creating an IIFE.

// Inside the IIFE, we define a variable x with a value of 10 and log it to the console.Because the variable x is defined inside the IIFE, it is not accessible outside of it, preventing it from polluting the global scope.

// IIFEs are commonly used in JavaScript to create self - contained modules, where you can define private variables and functions that are not accessible from outside the module.Here's an example of how you can create a simple module using an IIFE:


// var myModule = (function () {
//     var privateVar = 0;

//     function privateFunction() {
//         console.log('Private function called');
//     }

//     return {
//         publicVar: 1,
//         publicFunction: function () {
//             console.log('Public function called');
//         }
//     };
// })();

// console.log(myModule.publicVar); // Outputs 1
// myModule.publicFunction(); // Outputs "Public function called"
// console.log(myModule.privateVar); // Outputs undefined (private variable)
// myModule.privateFunction(); // Throws an error (private function)

// In this example, we define an IIFE that creates a module with a private variable privateVar and a private function privateFunction, as well as a public variable publicVar and a public function publicFunction.

// We then return an object that contains the public variables and functions, which can be accessed from outside the module.The private variables and functions, however, are not accessible from outside the module and are hidden inside the scope of the IIFE.

//     Overall, IIFEs are a powerful tool in JavaScript that can help you create self - contained scopes and avoid polluting the global scope with variables and functions.