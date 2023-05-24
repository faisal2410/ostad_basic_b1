// console.log("Welcome to Javascript Live Class 3");

/*
Agenda :
1.Function, Arrow Function
2.Array
3.Object
4.Ternary Operator
5. Loop
6.Map, filter, find
*/


// function task() {
//     console.log("Task One");
//     console.log("Task Two");
//     console.log("Task Three");
//     console.log("Task Four");
// }

// Arrow Function / Rocket

// const task = () => {
//     console.log("Task One");
//    console.log("Task Two");
//     console.log("Task Three");
//     console.log("Task Four");
// }
 
// task();

// parameter

// argument, default parameter, return


// let add = (x=5,y=2) => {
//     return x / y;
   
// }

// let test = add(50, 5);

// console.log("===========>", test + 20 - 48);
// let info = `My mark is ${test}`;
// console.log(info);

// let student1Name = "Faisal";
// let student2Name = "Talha";
// let student3Name = "Afnan";

// let class7 = ["Faisal", "Talha", "Afnan"];
// let class8 = ["A", "B"];

// let allStudents = class7.concat(class8);
// console.log(allStudents);

// let colors = ["red", "white", "black"];

// colors[1] = "Yellow";
// console.log(colors);

// colors.shift();
// console.log(colors);
// colors.unshift("Pink");
// console.log(colors);
// colors.push("green");
// console.log("xxxxxxxxx",colors);
// colors.pop();
// console.log("yyyyyyyyyyy", colors);
// colors.pop();
// console.log("zzzzz", colors);

// console.log("==========>",studentsName[2])


let numbers = [1, 2, 3, 4, 5]  //[2,4,6,8,10] // [7,9]

// const doubled = numbers.map((x) => {
//     return 2 * x+5
    
// });
// console.log(doubled);

// ["Mark is 1", "Mark is 2"]

// let test= numbers.map(function (y) {
//     return `Marks is ${y}`
// })

// console.log(test)

let person = {
    fullName: "Faisal ahmed",
    city: "Sylhet",
    age: 50,
    childrensName: ["Afnan", "Talha", "Raihana", "Mashrufa"],
    isLazy: true,
    address: {
        village: "Khadimpara",
        country:"Bangladesh"
    },
    skills: ["html", "css"],
    photoUrl:"https://picsum.photos/200/300"
}

// person.childrensName[3] = "Mashrufa Binte Faisal"

let test = Object.entries(person);
console.log(test);

// console.log( person.childrensName[3] );





// Function Example
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("John"); // Output: Hello, John!

// Array Example
// let numbers = [1, 2, 3, 4, 5];

// Print each number in the array
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// Object Example
// let person = {
//     name: "Alice",
//     age: 30,
//     profession: "Engineer"
// };

// Access object properties
// console.log(person.name); // Output: Alice
// console.log(person.age); // Output: 30
// console.log(person.profession); // Output: Engineer

// For Loop Example
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }



// Map Example
// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Filter Example
// let ages = [18, 25, 12, 32, 15];

// let adults = ages.filter(function (age) {
//     return age >= 18;
// });

// console.log(adults); // Output: [18, 25, 32]

// Find Example
// let books = [
//     { title: "JavaScript Basics", pages: 200 },
//     { title: "HTML & CSS Guide", pages: 350 },
//     { title: "Python Crash Course", pages: 400 }
// ];

// let foundBook = books.find(function (book) {
//     return book.title === "JavaScript Basics";
// });

// console.log(foundBook); // Output: { title: "JavaScript Basics", pages: 200 }

// Object.keys() Example
// let person = {
//     name: "Alice",
//     age: 30,
//     profession: "Engineer"
// };

// let keys = Object.keys(person);

// console.log(keys); // Output: ["name", "age", "profession"]

// Object.values() Example
// let values = Object.values(person);

// console.log(values); // Output: ["Alice", 30, "Engineer"]

// Object.entries() Example
// let entries = Object.entries(person);

// console.log(entries);
// Output: [["name", "Alice"], ["age", 30], ["profession", "Engineer"]]


