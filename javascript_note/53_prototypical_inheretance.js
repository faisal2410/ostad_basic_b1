// In JavaScript, prototypal inheritance is a way of creating objects based on other objects.Every object in JavaScript has a prototype, which is another object that serves as a template or blueprint for creating the new object.

// When a property or method is accessed on an object, JavaScript first looks for it on the object itself.If the property or method is not found on the object, JavaScript looks for it on the object's prototype. If it's not found on the prototype, JavaScript looks for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain, which is the Object.prototype object.

// Here's an example to illustrate prototypal inheritance in JavaScript:


 // create a person object
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

 // create a student object that inherits from person
// var student = Object.create(person);
// student.studentId = "1234";

 // access properties and methods on student
// console.log(student.firstName); // "John"
// console.log(student.lastName); // "Doe"
// console.log(student.fullName()); // "John Doe"
// console.log(student.studentId); // "1234"

// In this example, we create a person object with properties firstName, lastName, and fullName().We then create a student object using the Object.create() method, which sets student's prototype to person. student has its own property called studentId.

// When we access properties and methods on student, JavaScript first looks for them on student.If they're not found, JavaScript looks for them on person, which is student's prototype.In this case, student does not have its own properties or methods, so JavaScript looks for them on person.

// student inherits person's firstName, lastName, and fullName() properties and methods. student also has its own studentId property.

// This is an example of how prototypal inheritance works in JavaScript.Instead of creating new objects from scratch, we can create new objects that inherit from existing objects, and then add or override properties and methods as needed.This can make our code more efficient and easier to manage, especially when dealing with complex objects that share many common properties and methods.