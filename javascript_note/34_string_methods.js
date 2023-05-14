// JavaScript provides a number of built -in methods that can be used to manipulate and work with strings.Here are some of the most commonly used string methods in JavaScript:

// charAt(index): Returns the character at the specified index in a string.

//concat(str1, str2, ...) : Combines two or more strings and returns a new string.

//indexOf(substr, start) : Returns the index of the first occurrence of a specified substring in a string.If the substring is not found, it returns - 1.

// lastIndexOf(substr, start) : Returns the index of the last occurrence of a specified substring in a string.If the substring is not found, it returns - 1.

// slice(start, end) : Extracts a section of a string and returns a new string.The extracted section starts at the specified start index and ends at the specified end index(but does not include the end index).

//substring(start, end) : Similar to the slice() method, but does not allow negative indices.

//replace(regexp, replacement) : Replaces a specified substring or regular expression with another string.

//toLowerCase() : Converts a string to lowercase.

//toUpperCase() : Converts a string to uppercase.

//trim() : Removes whitespace from both ends of a string.

//split(separator, limit) : Splits a string into an array of substrings based on a specified separator.The limit parameter specifies the maximum number of splits to make.

//length : Returns the length of a string.

// Here is an example of how to use some of these string methods in JavaScript:


// let str = "Hello, World!";
// console.log(str.charAt(1)); // e
// console.log(str.concat(" How are you?")); // Hello, World! How are you?
// console.log(str.indexOf("World")); // 7
// console.log(str.slice(0, 5)); // Hello
// console.log(str.replace("World", "Universe")); // Hello, Universe!
// console.log(str.toLowerCase()); // hello, world!
// console.log(str.toUpperCase()); // HELLO, WORLD!
// console.log(str.trim()); // Hello, World!
// console.log(str.split(", ")); // ["Hello", "World!"]
// console.log(str.length); // 13
// By using these string methods, you can easily manipulate and work with strings in JavaScript.