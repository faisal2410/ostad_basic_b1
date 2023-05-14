// In JavaScript, an object is a data structure that allows you to store collections of data, called properties and methods.An object can represent a real - world entity, such as a person, car, or book, or it can be an abstract concept, such as a color or a shape.

// You can create an object in JavaScript using two main syntaxes: object literal notation and constructor notation.

// Object literal notation
// Object literal notation is the simplest way to create an object in JavaScript.It involves defining an object as a comma - separated list of name - value pairs enclosed in curly braces { }. Here's an example:


// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     sayHello: function () {
//         console.log('Hello!');
//     }
// };


// In this example, we've defined an object called person with four properties: firstName, lastName, age, and sayHello. The sayHello property is a method that logs "Hello!" to the console.

// You can access the properties and methods of an object using dot notation or bracket notation.Here are some examples:


// console.log(person.firstName); // Output: John
// console.log(person['lastName']); // Output: Doe
// person.sayHello(); // Output: Hello!


// Constructor notation
// Constructor notation involves defining an object using a constructor function. A constructor function is a special function that is used to create and initialize an object.Here's an example:


// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.sayHello = function () {
//         console.log('Hello!');
//     };
// }

// let person = new Person('John', 'Doe', 30);


// In this example, we've defined a constructor function called Person that takes three arguments: firstName, lastName, and age. The function initializes the object using the this keyword, which refers to the object being created. We've also defined a sayHello method using the same syntax.

// To create a new object using the constructor function, we use the new keyword followed by the name of the constructor function and its arguments.In this case, we've created a new object called person.

// You can access the properties and methods of an object created using constructor notation in the same way as an object created using object literal notation.



// Object.keys(): Returns an array of the object's own enumerable property names.

// Object.values(): Returns an array of the object's own enumerable property values.

// Object.entries(): Returns an array of the object's own enumerable property key-value pairs.

// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object, and returns the target object.
    
// Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property.

// Object.freeze(): Freezes an object, preventing new properties from being added to it, and existing properties from being removed or changed.
    
// Object.seal(): Seals an object, preventing new properties from being added to it, but allowing existing properties to be changed.

// Object.is(): Determines whether two values are the same value.

// Object.fromEntries(): Takes an iterable of key - value pairs and returns a new object whose own properties are given by those pairs.

// Object.getPrototypeOf(): Returns the prototype(i.e., the value of the internal[[Prototype]] property) of the specified object.






// Object.keys(): This method returns an array of a given object's own property keys. It takes one argument, which is the object whose keys you want to retrieve.

// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const keys = Object.keys(myObj);

// console.log(keys); // Output: ["name", "age", "city"]


// Object.values(): This method returns an array of a given object's own property values. It takes one argument, which is the object whose values you want to retrieve.

// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const values = Object.values(myObj);

// console.log(values); // Output: ["John", 30, "New York"]


// Object.entries(): This method returns an array of a given object's own enumerable property key-value pairs. It takes one argument, which is the object whose entries you want to retrieve.

// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const entries = Object.entries(myObj);

// console.log(entries); // Output: [["name", "John"], ["age", 30], ["city", "New York"]]


// Object.assign(): This method copies the values of all enumerable properties from one or more source objects to a target object.It takes two or more arguments, where the first argument is the target object and the subsequent arguments are the source objects.
    
// const targetObj = { a: 1, b: 2 };
// const sourceObj1 = { b: 4, c: 5 };
// const sourceObj2 = { c: 6, d: 7 };

// const newObj = Object.assign(targetObj, sourceObj1, sourceObj2);

// console.log(newObj); // Output: { a: 1, b: 4, c: 6, d: 7 }


// Object.hasOwnProperty(): This method returns a boolean indicating whether the object has the specified property as its own property(as opposed to inheriting it from its prototype chain).It takes one argument, which is the name of the property you want to check.
  
// const myObj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// console.log(myObj.hasOwnProperty('name')); // Output: true
// console.log(myObj.hasOwnProperty('toString')); // Output: false



// Object.freeze():
// The Object.freeze() method is used to freeze an object.When an object is frozen, it cannot be modified in any way, including adding or deleting properties, or changing the values of existing properties.
//     Example:


// const obj = {
//     name: 'John',
//     age: 30
// };

// Object.freeze(obj);

// // Trying to modify the object
// obj.name = 'Peter'; // This will not work
// obj.city = 'New York'; // This will not work

// console.log(obj); // Output: { name: 'John', age: 30 }


// Object.seal():
// The Object.seal() method is used to seal an object.A sealed object is one where the properties cannot be deleted, but their values can be changed.
//     Example:


// const obj = {
//     name: 'John',
//     age: 30
// };

// Object.seal(obj);

// // Trying to delete a property
// delete obj.name; // This will not work

// // Trying to add a new property
// obj.city = 'New York'; // This will not work

// // Trying to modify a property
// obj.age = 35; // This will work

// console.log(obj); // Output: { name: 'John', age: 35 }



// Object.is():
// The Object.is() method is used to compare two values for equality.It returns a boolean value indicating whether the two values are the same or not.
//     Example:


console.log(Object.is('foo', 'foo')); // Output: true
console.log(Object.is('foo', 'bar')); // Output: false
console.log(Object.is(null, null)); // Output: true
console.log(Object.is(0, -0)); // Output: false