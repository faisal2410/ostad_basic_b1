// In JavaScript, a prototype is an object that serves as a template for other objects.Every JavaScript object has a prototype, which is a reference to another object from which it inherits properties and methods.

// When you create a new object in JavaScript using a constructor function, the object will inherit properties and methods from the prototype of that constructor function. You can add properties and methods to the prototype object, which will then be available to all instances of the object.

// Here is an example of how to use prototypes in JavaScript:


 // define a constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // add a method to the prototype object
// Person.prototype.greet = function () {
//     console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
// }

// // create an instance of the Person object
// var person1 = new Person('John', 30);

// // call the greet method on the person1 object
// person1.greet(); // outputs "Hello, my name is John and I am 30 years old."
// In the above example, we defined a constructor function Person that takes two parameters name and age.We then added a greet method to the Person.prototype object.Finally, we created an instance of the Person object and called the greet method on it.

// By using prototypes, we can add methods to objects without having to define them in the constructor function, which can lead to cleaner and more efficient code.Additionally, since all instances of an object share the same prototype, changes made to the prototype will be reflected in all instances.