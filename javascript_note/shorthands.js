// Shorthand in JavaScript refers to a concise way of writing code that achieves the same result as the longer, more explicit code.These shorthand techniques can make your code more readable and less verbose.Here are some examples of shorthand in JavaScript:

// Variable Declarations:
// Instead of writing out "var" or "let" multiple times, you can declare multiple variables at once using commas:
// 👀👀
let a = 1, b = 2, c = 3;

// Conditional(Ternary) Operator:
// The ternary operator is a shorthand for the "if-else" statement.It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
//   👀👀
let isRaining = true;
let weather = isRaining ? "Bring an umbrella" : "Leave the umbrella at home";
console.log(weather);

// Short - Circuit Evaluation:
// When using logical operators like "&&" and "||", if the first operand is sufficient to determine the result of the expression, the second operand won't be evaluated. This can be used to perform an action only if a certain condition is met:

// 👀👀
let fname = "Alice";
fname && console.log("Hello, " + fname);

// Template Literals:
// Template literals provide an easier way to concatenate strings, variables, and expressions without using the "+" operator.They use backticks and placeholders indicated by the "${}" symbols.
 
// 👀👀
let firstName = "Bob";
let lastName = "Smith";
console.log(`Hello, ${firstName} ${lastName}!`);

// Default Parameter Values:
// When defining a function with parameters, you can provide default values for the parameters using the equals sign.This way, if a parameter is not provided when calling the function, it will default to the specified value.

   
function greet(name = "world") {
    console.log(`Hello, ${name}!`);
}
greet(); // outputs "Hello, world!"
greet("Alice"); // outputs "Hello, Alice!"
// Arrow Functions:
// Arrow functions are a shorthand way of writing function expressions in JavaScript.They are anonymous functions that use the "=>" syntax to indicate the function body.

// 👀👀

// let numbers = [1, 2, 3, 4, 5];
// let squared = numbers.map(num => num * num);
// console.log(squared); // outputs [1, 4, 9, 16, 25]

// Destructuring:
// Destructuring is a shorthand way of extracting values from an object or array into separate variables.This can make your code more readable and save you from writing repetitive code.
// 👀👀
  
// let person = { name: "Alice", age: 25 };
// let { name, age } = person;
// console.log(name); // outputs "Alice"
// console.log(age); // outputs 25


// let numbers = [1, 2, 3];
// let [a, b, c] = numbers;
// console.log(a); // outputs 1
// console.log(b); // outputs 2
// console.log(c); // outputs 3
// Spread Syntax:
// Spread syntax is a shorthand way of spreading elements of an array or object into another array or object.This can be useful when you want to combine multiple arrays or objects.

// 👀👀
// let numbers1 = [1, 2, 3];
// let numbers2 = [4, 5, 6];
// let allNumbers = [...numbers1, ...numbers2];
// console.log(allNumbers); // outputs [1, 2, 3, 4, 5, 6]


// let person = { name: "Alice", age: 25 };
// let newPerson = { ...person, city: "New York" };
// console.log(newPerson); // outputs { name: "Alice", age: 25, city: "New York" }

// Object Literal Property Value Shorthand:
// When defining an object literal, if the property name and value have the same name, you can use shorthand syntax to simplify the code.
//   👀👀

// let name = "Alice";
// let age = 25;
// let person = { name, age };
// console.log(person); // outputs { name: "Alice", age: 25 }


// Object Literal Method Shorthand:
// When defining an object literal, if the property value is a function, you can use shorthand syntax to simplify the code.
   
// 👀👀

let person = {
    name: "Alice",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
person.greet(); // outputs "Hello, my name is Alice and I'm 25 years old."

// Array Methods:
// There are many shorthand methods available on arrays that can simplify common tasks like filtering, mapping, and reducing.
  
// 👀👀
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // outputs [2, 4]

let squared = numbers.map(num => num * num);
console.log(squared); // outputs [1, 4, 9, 16, 25]

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // outputs 15

// Nullish Coalescing Operator:
// The nullish coalescing operator(??) is a shorthand way of checking for null or undefined values and providing a default value if they are found.
 
// 👀👀
// let name = null;
// let defaultName = "world";
// let greeting = `Hello, ${name ?? defaultName}!`;
// console.log(greeting); // outputs "Hello, world!"


// Ternary Operator:
// The ternary operator is a shorthand way of writing if/else statements. It allows you to write a single line of code that evaluates a condition and returns one of two values, depending on whether the condition is true or false.
// 👀👀
// let age = 25;
// let message = age >= 18 ? "You are an adult" : "You are not an adult";
// console.log(message); // outputs "You are an adult"

// Template Literals:
// Template literals are a shorthand way of concatenating strings in JavaScript.They use backticks(`) to enclose the string, and allow you to embed variables and expressions using ${...} syntax.
//    👀👀
// let name = "Alice";
// let age = 25;
// let message = `Hello, my name is ${name} and I'm ${age} years old.`;
// console.log(message); // outputs "Hello, my name is Alice and I'm 25 years old."

// Shorthand Math Operations:
// You can use shorthand syntax to perform simple math operations in JavaScript, such as incrementing or decrementing a variable.

//   👀👀

// let count = 0;
// count++; // shorthand for count = count + 1;
// console.log(count); // outputs 1

// 👀👀

// let total = 10;
// total -= 5; // shorthand for total = total - 5;
// console.log(total); // outputs 5
// Short - Circuit Evaluation:
// Short - circuit evaluation is a shorthand way of writing if/else statements that check for the existence of a value. It uses the && and || operators to check if a value is truthy or falsy.

// 👀👀
// let name = null;
// let defaultName = "world";
// let greeting = name || defaultName;
// console.log(greeting); // outputs "world"

// 👀👀

// let user = { name: "Alice" };
// let displayName = user.name && `Hello, ${user.name}`;
// console.log(displayName); // outputs "Hello, Alice"

