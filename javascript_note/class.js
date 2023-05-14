// typeof operand;

// let x;

// console.log("========>🌹", typeof x);


// const floatString = "3.14";
// const test = "ostad";
// const floatNum = parseFloat(floatString); // 3.14
// console.log(floatNum);
// const testToNum = parseInt(test);
// console.log(testToNum);

// const numString = "123.23";
// const num = parseInt(numString); // 123
// console.log(num);

// var flag = true;
// console.log("The flag is " + flag); // Output: "The flag is true"

// var num = 10;
// var bool = Boolean(num);
// console.log(bool); // Output: true

// x = y = 25 + 5;
// y = 30;
// x = 30;

// let x = 5;
// x = x + 1;
// x++;
// x += 10;
// console.log(x);

/*
fkadjfjd
fdsklfjsd


*/

// let y = 5;
// y--;
// y *= 2;
// y /= 2;
// y %= 5;


// let fullName = "Faisal ahmed";
// let city = "Sylhet";

// let sentence = `My name is ${fullName}. I live in ${city}`;
// `dafkjdsk fjlfkj lfaflas
// sadfdsfasfasd
// dfsdfsa

// ${y}`

// let age = 9;
// let fName = "Afnan";

// if (age >= 18) {
//     console.log(`Hello ${fName}, You are allowed for national id card`)

// } else if (age >= 10) {
//     console.log("You are a teanager")
// } else {
//     console.log("You are baby");
// }



// console.log("Hello world");


// let num1 = 5;
// let num2 = 10;
// let num3 = 15;

// if (num1 > 0) {
//     if (num2 > 0) {
//         if (num3 > 0) {
//             console.log("All three numbers are positive");
//         } else {
//             console.log("num3 is not positive");
//         }

//     } else {
//         console.log("num2 is not positive");
//     }

// } else {
//     console.log("num1 is not positive");
// }

//  if (num1 > 0 && num2 > 0 && num3 > 0) {
//     console.log("all are positive")
//  } else if (num1 > 0 && num2 > 0) {

//  }

// if (num1 > 0) {
//     if (num2 > 0) {
//         if (num3 > 0) {
//             console.log("All three numbers are positive");
//         } else {
//             console.log("num3 is not positive");
//         }
//     } else {
//         console.log("num2 is not positive");
//     }
// } else {
//     console.log("num1 is not positive");
// }


// condition ? (true part):(false part)

// let age = 15;
// //  let message = age >= 18 ? "You are an adult" : "You are not an adult";
// //  console.log(message);

// let message = age >= 18 ? "adult" : "not adult";
// console.log(message);



// let number = 100;
// let commission = number > 10 ? ("Greater than 10") : (number<5?("Less than 5"):("Greater than 5 but less than 10"));

// let commission =number>10?("Greater or equal 10"):(number<5?(number<0?("Negative"):("Greater than zero but less than 5")):("greater than 5 but less than 10"))

// let commission=number>10?(number>=50?("greater than 50"):("greater than 10 but less then 50")):(number>=5?("greater than 5 but less then 10"):(number>=0?("Greater than 0 but less than 5"):("Negative number")))

// console.log(commission);

// let age = 18;

//  let greeting = age < 18 ? "Hello, young one!" : age <= 60 ? "Hello, adult!" : "Hello, wise one!";

// let greeting=age<18?(age>10?("greater than 10 but less than 18"):(age>5?("greater than 5 but less than 10"):("less than or equal 5"))):(age<=60?("greater than 18 but less or equal 60"):("above 60"))




// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum); // 15


// let num =5 ;

// if (num > 0) {
//     console.log("The number is positive");
// } else if (num < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

let age = 25;
let gender = "female";
let occupation = "student";

// if (age > 18) {
//     if (gender === "female") {
//         if (occupation === "student") {
//             console.log("She is a female student over 18 years old");
//         } else {
//             console.log("She is a female, but not a student");
//         }
//     } else {
//         console.log("Not a female");
//     }
// } else {
//     console.log("Not over 18 years old");
// }

// if (age > 18) {

//     if (gender === "female") {
//         if (occupation === "student") {
//             console.log("She is a female student over 18 years old");
            
//         } else {
//             console.log("She is a female, but not a student");
//         }

//     } else {
//         console.log("Not a female");

//     }
    
// } else {
//     console.log("Not over 18 years old");
 
// }

// let num = 5;
// let message = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// console.log(message);

 let myArray = [1, 2, 3, 4, 5];
// console.log(myArray[0]); // prints 1
// console.log(myArray[2]); // prints 3

// myArray[2] = 25;
// console.log("========>", myArray)

// function greetings() {
//     console.log("Hello world")
// }
// greetings()

// const greetings = () => {
//     console.log("Hello world");
// }
// greetings()

// const sum = (x, y) => {
//     return x + y;
// }
// const sum = x => {
//     return x + 2;
// }
// const sum = x => x + 2;
// const sum = (x,y) => x + y;



// console.log(sum(2, 3));

// const test=n=>n>3

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(number => number > 3);
// // const filteredNumbers = numbers.filter(test);
// console.log(filteredNumbers); // Output: [4, 5]


// const numbers = [5, 2, 3, 4, 5];
// const foundNumber = numbers.find(number => number > 3);
// console.log(foundNumber); // Output: 4


// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(n => n +2);

// console.log(doubled); // [2, 4, 6, 8, 10]


// const fruits = ['apple', 'banana', 'orange'];

// // console.log(fruits.join()); // 'apple,banana,orange'
// console.log(fruits.join('*')); // 'apple-banana-orange'


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue,1);

// console.log(sum); // 15


// y = 5 + 2 * 3 % 2 - 1
// console.log(y)

// let students = ["Faisal", "Talha", "Mashrufa"];

// // students[2] = "Raihana"
// // students.push("Afnan","habib");
// students.pop()
// console.log(students);

// const fruits = ['apple', 'banana', 'orange'];

// // console.log(fruits.join()); // 'apple,banana,orange'
// // console.log(fruits.join('-')); // 'apple-banana-orange'

// console.log(fruits.join())

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1);
// console.log(myBest);

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(number => number > 3);
// console.log(filteredNumbers); // Output: [4, 5]

// function greetings() {
//     console.log("Hello world")
// }

// greetings(); //call, invoke, execute

// let x = 5;
// let y = 10;

// function sum(num1, num2 = 8, num3 = 5) {

//     return num1 + num2 + num3


// }

// console.log(sum(5,10,20))

// Arrow function
// const sum = (x, y) => {
//     return x + y;
// }
// console.log(sum(2, 3))

// const sum = x => x + 2;
// const sum = (x) => x + 2;



// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(n => n %2!==0);
// console.log(filteredNumbers); // Output: [4, 5]


// const numbers = [5, 2, 3, 4, 5];
// const foundNumber = numbers.find(number => number > 0);
// console.log(foundNumber); // Output: 4


// const numbers = [1, 2, 3, 4, 5];

// const test=(n)=>n**2

// const doubled = numbers.map(number => number ** 2);
// const doubled = numbers.map(test);

// console.log(doubled); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number));

// Output: 1
//         2
//         3
//         4
//         5








