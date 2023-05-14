// In JavaScript, every object has a prototype, which is an object that serves as a template for creating new objects.The prototype object contains properties and methods that are shared among all objects that inherit from it.

// When you access a property or method on an object, JavaScript first checks if the object itself has that property or method.If it doesn't, JavaScript looks for the property or method on the object's prototype.If the prototype doesn't have it, JavaScript looks for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain, which is the Object.prototype object.

//     Here's an example to illustrate how the prototype chain works:


 // create an object
// var person = {
//     name: "John",
//     age: 30,
//     greet: function () {
//         console.log("Hello, my name is " + this.name);
//     }
// };

 // create a new object that inherits from person
// var student = Object.create(person);
// student.grade = "A";

 // create another object that inherits from student
// var scienceStudent = Object.create(student);
// scienceStudent.major = "Biology";

// access properties and methods on scienceStudent

// console.log(scienceStudent.major); // "Biology"
// console.log(scienceStudent.grade); // "A"
// scienceStudent.greet(); // "Hello, my name is John"

// In this example, we create an object called person with properties name, age, and greet().We then create a new object called student that inherits from person using the Object.create() method.student has its own property called grade.

// We then create another object called scienceStudent that inherits from student.scienceStudent has its own property called major.

// When we access the properties and methods on scienceStudent, JavaScript first looks for them on scienceStudent.If they're not found, JavaScript looks for them on student. If they're still not found, JavaScript looks for them on person.In this case, scienceStudent has its own property called major, which is found immediately.scienceStudent does not have its own property called grade, so JavaScript looks for it on student, which has it.Finally, scienceStudent does not have its own method called greet(), so JavaScript looks for it on person, which has it.



