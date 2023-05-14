// JavaScript provides a variety of built -in methods for working with dates.Here are some of the most commonly used date methods in JavaScript:

// new Date() : Creates a new Date object representing the current date and time.

//Date.parse(dateString) : Parses a string representing a date and time, and returns the number of milliseconds since January 1, 1970, 00: 00: 00 UTC.

//dateObj.getFullYear() : Returns the year(4 digits) of a Date object.

//dateObj.getMonth() : Returns the month(0 - 11) of a Date object.

//dateObj.getDate() : Returns the day of the month(1 - 31) of a Date object.

//dateObj.getDay() : Returns the day of the week(0 - 6) of a Date object, where Sunday is 0 and Saturday is 6.

//dateObj.getHours() : Returns the hour(0 - 23) of a Date object.

//dateObj.getMinutes() : Returns the minute(0 - 59) of a Date object.

//dateObj.getSeconds() : Returns the second(0 - 59) of a Date object.

//dateObj.getMilliseconds() : Returns the millisecond(0 - 999) of a Date object.

//dateObj.getTime() : Returns the number of milliseconds since January 1, 1970, 00: 00: 00 UTC.

//dateObj.setTime(milliseconds) : Sets the Date object to the specified number of milliseconds since January 1, 1970, 00: 00: 00 UTC.

//dateObj.toDateString() : Returns the date portion of a Date object as a human - readable string.

//dateObj.toTimeString() : Returns the time portion of a Date object as a human - readable string.

//dateObj.toLocaleDateString() : Returns the date portion of a Date object as a localized string.

//dateObj.toLocaleTimeString() : Returns the time portion of a Date object as a localized string.

// Here is an example of how to use some of these date methods in JavaScript:


// let today = new Date();
// console.log(today.getFullYear()); // 2023
// console.log(today.getMonth()); // 2 (March - 0 based)
// console.log(today.getDate()); // 27
// console.log(today.getDay()); // 0 (Sunday)
// console.log(today.getHours()); // 12
// console.log(today.getMinutes()); // 30
// console.log(today.getSeconds()); // 0
// console.log(today.getTime()); // 1648433400000
// console.log(today.toDateString()); // Sun Mar 27 2023
// console.log(today.toTimeString()); // 12:30:00 GMT-0700 (Pacific Daylight Time)
// console.log(today.toLocaleDateString()); // 3/27/2023
// console.log(today.toLocaleTimeString()); // 12:30:00 PM
// By using these date methods, you can easily manipulate and work with dates in JavaScript.