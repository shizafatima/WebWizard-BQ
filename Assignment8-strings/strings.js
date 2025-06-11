//String length
let myname = "Shiza Fatima";
let length = myname.length;
console.log("The length of a string is: ", length)


//Extracting string characters

let a = "Shiza Fatima";

let char1 = a.at(3);
console.log("1-Extracting string character by at(position): ", char1)

let char2 = a.charAt(7);
console.log("2-Extracting string character by CharAt(position): ", char2)

let char3 = a.charCodeAt(4);
console.log("3-Extracting string character by charCodeAt(position): ", char3)

let char4 = a[9]
console.log("3-Extracting string character by property access[]: ", char4)

//Extracting string parts

let b = "Shiza Fatima";

//take 2 arguments from where to start and where to end in all methods

let part1 = b.slice(0, 6);
console.log("Extracting part of string by using slice(start, end) method: ", part1);

let part2 = b.substring(6, 12);
console.log("Extracting part of string by using substring(start, end) method: ", part2);


//substr method is deprecated and should not be used in modern code thats why the text is strikethrough
let part3 = b.substr(0, 5);
console.log("Extracting part of string by using substr(start, length) method: ", part3);

//change the case of string 
let string_case = "shiza fatima"
let case1 = string_case.toUpperCase()
console.log("This change the case to uppercase(All capital letters): ", case1);

let string_case2 = "SHIZA FATIMA"
let case2 = string_case2.toLowerCase()
console.log("This change the case to lowercase(All small letters): ", case2);


//string concat to join 2 strings

let c = "My name is"
let d = "Shiza Fatima"
let concat = c.concat(" ", d)
console.log("This will join the string with space because the double quote is empty and have just one space: ", concat);

//2nd way of joining 

// let c = "My name is" + " " + "Shiza Fatima"
// console.log(c)

//Javascript String Trim

let e = "   My name is Shiza Fatima     "
let trim = e.trim();
console.log(`This trim method removes whitespaces from both side of string: ${trim}`);

// trimStart() => The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// trimEnd() => The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

//STRING PADDING => String padding is the process of adding extra characters (usually spaces or zeros) to a string to make it a certain length. 

let text = "6"
let padded_start = text.padStart(5, 0)
console.log(`padStart method will add 0 to the start ofstring until it reaches the length of five: ${padded_start}`);

let padded_end = text.padEnd(4, "s")
console.log(`padEnd method will add "s" to the end of string until it reaches the length of four: ${padded_end}`);

// JAVASCRIPT STRING REPEAT => The repeat() method returns a string with a number of copies of a string.

let f = "Hello, world!"
let result = f.repeat(4)
console.log(`This will repeat the string 4 times: ${result}`);


//REPLACING STRINGS => The "replace() method" replaces a specified value with another value in a string. It only replaces first match but "replaceAll() method" replaces a specified value with another value in a string, and if we want that the code doesnot throw the type error then we must set the regEx of global flag (/g)


let text1 = "I love cats. Cats are very easy to love. Cats are very popular."
let result1 = text1.replace("cats", "dogs") 
console.log(`text1.replace("cats", "dogs")  will replace only first match and string with lower case: ${result1}`);

let text2 = "I love cats, Cats are very easy to love"
let result2 = text2.replaceAll(/cats/g, "dogs")
let result3 = text2.replaceAll(/Cats/g, "Dogs")
console.log(`text2.replaceAll(/cats/g, "dogs") will replace cats with lowercase globally: ${result2}`);
console.log(`text2.replaceAll(/Cats/g, "Dogs") will replace cats with Upperercase globally: ${result3}`);




//STRING SPLIT => A string can be converted to an array with the split() method. If the separator is omitted, the returned array will contain the whole string in index [0]. If the separator is "", the returned array will be an array of single characters:

// let g = "Hello"
// let split_result = g.split(",")
// console.log(`This will returned the single character of an array: ${split_result}`);
