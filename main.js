/* TABLE OF COMTENT
  ## String
  ## String Methods    
  ## String Search


*/
/* String */

//let text = "We are the so-called "Viking" from the north." // This is give an error to fix this we will take below solutionn

let text = 'We are the so-called "Viking" from the north.';
console.log(text);

let text2 = "We are the so-called \\Viking\\ from the north."; // Of i want only the backslash \\
console.log(text2);

let text3 =
  "We are the so-called \
Viking from the north."; // if i want to breakdown the line i need to use a single backslash and i also use a single +
console.log(text3);

let text4 = "We are the so-called" + " " + "Viking from the north."; // if i want to breakdown the line i need to use a single backslash and i also use a single +
console.log(text4);

// document.getElementById("demo").innerHTML = \
// "Hello Dolly"; // the backslash i can use only in string for break a line

let x = "John";
let y = new String("John");

console.log(x == y); // This willreturn true becasue the == double equal ckeck the value if value is same it return true else result is not true it return false
console.log(x === y); // This willreturn false becasue the === tripple equal ckeck the value and also the type if value & type is same it return true else result is not true it return false

let x2 = new String("John");
let y2 = new String("John");

console.log(x2 == y2); // But we can't compare a object to another object it will be always return false
console.log(x2 === y2); // But we can't compare a object to another object it will be always return false

/* String Methods */ // All String methods return a new string. They dont't modify the original string. Formally said: Strings are immutable: Strings cannot be cahnged, only replaced.

const a = {
  name: "Bangladesh",
  districts: 64,
}; // we can access this length with .lengthe because this is a object

const s = "Bangladesh"; // this will create a primitive value
console.log(s.length); // But when we use . the javascript start thinking s is a object

let food = "Apple, Banana, Kiwi";

// .slice()
console.log("string" + " " + food.slice(7, 13));
console.log("string" + " " + food.slice(7)); // this will return everything after the 7th length
console.log("string" + " " + food.slice(-12, -6)); // we can access with negative indexes

// .substring()
console.log("substring" + " " + food.substring(7, 13));
console.log("substring" + " " + food.substring(-12, -6)); // we can not access with negative indexes in .substring()

// .substr()
console.log("substr" + " " + food.substr(7, 6)); // The difference is that second parameter specifies the length of the extracted part.
console.log("substr" + " " + food.substr(-12, 6));

// .replace()
let myLocation = "I am currently in Dhaka"; // but now i want to replace the Dhaka to Sylhet i can use .replace() method
let myCurrentLocation = myLocation.replace("Dhaka", "Sylhet"); // in first parameter i need to write what i want to replace and the second parameter i need to write what i want to place
console.log("My Location" + " : " + myLocation);
console.log("My Current Location" + " : " + myCurrentLocation);

let myLocation2 = "I am currently in Dhaka & i am living in Dhaka";
let myCurrentLocation2 = myLocation2.replace("Dhaka", "Sylhet"); // the replace method replaces only the first match
console.log("My Location2" + " : " + myLocation2);
console.log("My Current Location2" + " : " + myCurrentLocation2);

// .toUpperCase()
let myName = "John Doe";
console.log(myName.toUpperCase());

// .toUpperCase()
console.log(myName.toLowerCase());

// .concat()
let firstName = "John";
let lastName = "Doe";

console.log(firstName.concat(" ", lastName));
console.log(firstName.concat(lastName));
console.log(lastName.concat(" ", lastName));
console.log(lastName.concat(" ", firstName));

// [] Array on String
console.log("Using Array : " + firstName[0]);
console.log("Using Array : " + firstName[500]);

// .charAt()
console.log("Using charAt : " + firstName.charAt(500));

// The .concat() method can be used instead of the plus + operator
console.log(firstName + " " + lastName + " " + "Using the plus + Operator ");
console.log(firstName + lastName + " " + "Using the plus + Operator ");
console.log(lastName + " " + lastName + " " + "Using the plus + Operator ");
console.log(lastName + " " + firstName + " " + "Using the plus + Operator ");

// The .trim() method removes whitespace from both sides of a string:
let text5 = "        Hello World!          ";
console.log(text5.trim());

// .padstart()
let text6 = "5";
console.log(text6.padStart(4, 0)); // The first parameter is how much pad will be and by default the second parameter is whitespace but if i write 0 the whitespace will fill with 0
console.log(text6.padStart(4));
// .padEnd()
console.log(text6.padEnd(4, 0));
console.log(text6.padEnd(4));

// The .split() method make the Array
let text7 = "HELLO WORLD";
console.log(text7.split());
console.log(text7.split("")); // If the separator is "", the returned array will be an array of single characters:
console.log(text7.split(","));
console.log(text7.split(" "));
console.log(text7.split("|"));

/* String Search */

// .indexOf()
let str = "Please locate where 'locate' occurs!";
console.log("indexOf : ", str.indexOf("locate"));
console.log("indexOf : ", str.indexOf("Locate"));
console.log("indexOf : ", str.indexOf("locate", 14)); // This will start counting from the beginning
console.log("indexOf : ", str.indexOf("Locate", 14)); // This will start counting from the beginning

// .lastIndexOf()
console.log("lastIndexOf : ", str.lastIndexOf("locate"));
console.log("lastIndexOf : ", str.lastIndexOf("Locate"));
console.log("lastIndexOf : ", str.lastIndexOf("locate", 15)); // This will start counting from the end
console.log("lastIndexOf : ", str.lastIndexOf("Locate", 15)); // This will start counting from the end

// .match()
let text8 = "The rain in SPAIN stays mainly in the plain";
console.log(".match() : ", text8.match(/ain/));
console.log(".match() : ", text8.match(/ain/i));
console.log(".match() : ", text8.match(/ain/g));

// The .includes() method return true if there has "rain" in text8 if not it will return false.
console.log("includes : ", text8.includes("rain"));
console.log("includes : ", text8.includes("rain", 12));
console.log("includes : ", text8.includes("Rain"));

// The .String.startsWith() method returns true if a string begins with a specific value, otherwise false:
console.log("startsWith", text8.startsWith("The"));
console.log("startsWith", text8.startsWith("rain"));
console.log("startsWith", text8.startsWith("rain", 3)); // this will return false because search is beginning from 3 but the rain is starting from 4
console.log("startsWith", text8.startsWith("rain", 4));
console.log("startsWith", text8.startsWith(" ", 3)); // but this doesn't return false because the search is beginning from 3 with whitespace is true

// The .String.endsWith() method returns true if a string ends with a specific value, otherwise false:
console.log("endsWith", "", text8.endsWith("rain"));
console.log("endsWith", text8.endsWith("rain", 8));

/* String Template OR Template Literals  */

// The template literal OR String Template is (``) template literal == backtag ``

let text9 =
  "We are the so-called \
Viking from the north."; // if i want to breakdown the line i need to use a single backslash and i also use a single +

let text10 = `We are the so-called  
Viking from the north.`; // But if i want to breakdown the line i doesn't need to use a backslash and also + // But this will break down the html element

console.log(text9);
console.log(text10);

// Interpolation ${}
let country = "Bangladesh";
let a2 = 17;
let b = 1;
let sentence = "I love" + country + "and it is a big country";
let sentence2 = `I love ${country} and it is a big country`; // This is Interpolation
let sentence3 = `I love ${country} and it's population is ${a2 + b} crore`; // This is Interpolation

console.log(sentence);
console.log(sentence2);
console.log(sentence3);

/* Javascript Numbers */

let x3 = 3.14; // A number with decimals
let y3 = 3; // A number without decimals

let x4 = 123e5;
let y4 = 123e-5;
console.log("Javascript Numbers : ", x4);
console.log("Javascript Numbers : ", y4);

// Precision
//        Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let x5 = 999999999999999; // x will be 99999999999999 and accurate
let y5 = 9999999999999999; // y will be 10000000000000000 and not accurate 100%

console.log("Precision : ", x5);
console.log("Precision : ", y5);

// Decimals
//        The maximum number of decimals is 17, but floating arithmetic is not always 100% accurate

let x6 = 0.2 + 0.1;
let x7 = 0.3 + 0.1;
let x8 = (0.2 * 10 + 0.1 * 10) / 10; // To fix the floating number not accurate
console.log("Decimals : ", x6);
console.log("Decimals : ", x7);
console.log("Decimals : ", x8);

let x9 = 10;
let y6 = 20;

let result = "The result is " + x9 + y6;
let result2 = x9 + y6 + " The result is";
let result3 = "The result is " + (x9 + y6); // to solve this problem
console.log(result);
console.log(result2);
console.log(result3);

// Numeric Strings
//        Javascript try to convert string to number

let x10 = "200";
let y7 = "10";
let z = x10 / y7; // Numeric Strings work in division /
// let z2 = z10 + y7; // Numeric Strings doesn't not work in plus + Operator
let z3 = x10 / "apple"; // This will return NaN it's mean Not a Number
let z4 = x10 / "20"; // This doesn't return NaN it's mean Not a Number  Because However, if the string contains a numeric value, the result will be a number

console.log("Numeric Strings : ", x10);
console.log("Numeric Strings : ", y7);
console.log("Numeric Strings : ", z);
// console.log("Numeric Strings : ", z2);
console.log("Numeric Strings : ", z3);
console.log("Numeric Strings : ", z4);

// NaN OR Not a Number is a number
let str2 = "b" + "a" + +"a" + "a";
console.log("str2 : ", str2);
console.log("str2 : ", str2.toUpperCase());

/* String Methods */

// .toString()
//        All number methods can be used on any type of numbers (literals, varaibles, or expressions):

let x11 = 123;
let newN = x11.toString(); // returns 123 from variable x
(123).toString(); // returns 123 from literal 123
(100 + 23).toString(); // returns 123 from expression 100 + 23

console.log(".toString", typeof newN);
console.log(".toString", newN);
console.log(".toString", (123).toString());
console.log(".toString", (100 + 23).toString());

// .toExponential()
//        toExponential() returns a string, with a number rounded and written using exponential notation.
//        A parameter defines the number of characters behind the decimal point:
let x12 = 9.656;
console.log(".toExponential : ", x12.toExponential());
console.log(".toExponential : ", x12.toExponential(2));
console.log(".toExponential : ", x12.toExponential(4));
console.log(".toExponential : ", x12.toExponential(6));

let x13 = 9566;
console.log(".toExponential : ", x13.toExponential(0));
console.log(".toExponential : ", x13.toExponential(2));
console.log(".toExponential : ", x13.toExponential(4));
console.log(".toExponential : ", x13.toExponential(6));

// .toFixed()
//        toFixed() returns a string, with the number written with a specifies number of decimals:

console.log(".toFixed : ", x12.toFixed(0));
console.log(".toFixed : ", x12.toFixed(2));
console.log(".toFixed : ", x12.toFixed(4));
console.log(".toFixed : ", x12.toFixed(6));

// .toPrecision()
//        toPrecision() returns a string, with a number written with a specified length:

console.log(".toPrecision : ", x12.toPrecision());
console.log(".toPrecision : ", x12.toPrecision(2));
console.log(".toPrecision : ", x12.toPrecision(4));
console.log(".toPrecision : ", x12.toPrecision(6));

// .valueOf()
//        valueOf() returns a number as a number.

console.log("valueOf : ", x11.valueOf()); // returns 123 from varaible x11
console.log("valueOf : ", (123).valueOf()); // returns 123 from literal 123
console.log("valueOf : ", (100 + 23).valueOf()); // returns 123 from expression 100 + 23

// Number() function
//        Number() can be used to convert Javascript variables to numbers:

console.log("Number() function : ", Number(true));
console.log("Number() function : ", Number(false));
console.log("Number() function : ", Number("10"));
console.log("Number() function : ", Number("  10"));
console.log("Number() function : ", Number("10  "));
console.log("Number() function : ", Number(" 10  "));
console.log("Number() function : ", Number("10.33"));
console.log("Number() function : ", Number("10,33"));
console.log("Number() function : ", Number("10 33"));
console.log("Number() function : ", Number("John"));

// parseInt()
//        parseInt() parses a string and returns a whole number. spaces are allowed. Only the first number is returned:

console.log("parseInt() function : ", parseInt(true));
console.log("parseInt() function : ", parseInt(false));
console.log("parseInt() function : ", parseInt("-10"));
console.log("parseInt() function : ", parseInt("  -10.33"));
console.log("parseInt() function : ", parseInt("10  "));
console.log("parseInt() function : ", parseInt(" 10  "));
console.log("parseInt() function : ", parseInt("10.33"));
console.log("parseInt() function : ", parseInt("10,33"));
console.log("parseInt() function : ", parseInt("10 20 30"));
console.log("parseInt() function : ", parseInt("10.33 20 30"));
console.log("parseInt() function : ", parseInt("10 Years"));
console.log("parseInt() function : ", parseInt("Years 10"));
console.log("parseInt() function : ", parseInt("  10"));

// parseFloat()
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log("parseFloat() function : ", parseFloat(true));
console.log("parseFloat() function : ", parseFloat(false));
console.log("parseFloat() function : ", parseFloat("-10"));
console.log("parseFloat() function : ", parseFloat("  -10.33"));
console.log("parseFloat() function : ", parseFloat("10  "));
console.log("parseFloat() function : ", parseFloat("10.33"));
console.log("parseFloat() function : ", parseFloat("10,33"));
console.log("parseFloat() function : ", parseFloat("10 20 30"));
console.log("parseFloat() function : ", parseFloat("10.33 20 30"));
console.log("parseFloat() function : ", parseFloat("10 Years"));
console.log("parseFloat() function : ", parseFloat("Years 10"));

/* Array */

let car1 = "Saab"; // without array
let car2 = "Volvo"; // without array
let car3 = "BMW"; // without array

const cars = ["Saab", "Volvo", "BMW"]; // WIth array

const cars2 = [
  // Spaces and line breaks are not important. A declaration can span multiple lines:
  "Saab",
  "Volvo",
  "BMW",
];

const cars3 = []; // You can also create an array, and then provide the elements:
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";

document.getElementById("cars").innerHTML = cars3;

console.log(cars3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2[4] = "pineapple";
fruits2[5] = "pineapples";
fruits2[6] = "pineappless";
fruits2[7] = "pineapplesss";

console.log(fruits);
console.log(fruits[fruits.length - 1]);
console.log((fruits[fruits.length] = "Lemon"));

// Javascript Looping
// for() Loop

for (i = 0; i < fruits.length; i++) {
  console.log("for() : ", i);
  console.log("for() : ", fruits[i]);
  console.log("Finished");
}

// forEach() Loop
function myFunction(value) {
  console.log("forEach() : ", value);
}

fruits.forEach(myFunction);

console.log("Finished");

// .push()
console.log(".push() : ", fruits2.push("Lemon"));

/* Array Methods */
// Array to String with .toString() method
console.log("Array to String() : ", fruits.toString());

// .join() method
console.log(".join() : ", fruits.join(" * "));
console.log(".join() : ", fruits.join(" , "));
console.log(".join() : ", fruits.join(" | "));
console.log(".join() : ", fruits.join("|"));

//  .pop() method
//  The .pop() method removes the last element from an array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".pop() : ", fruits3);
console.log(".pop() : ", fruits3.pop());
console.log(".pop() : ", fruits3);

//  .push() method
//  The .push() method adds a new element to an arrat (at the end):
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".push() : ", fruits4);
console.log(".push() : ", fruits4.push("pineapple"));
console.log(".push() : ", fruits4);

//  .shift() method
//  The .shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".shift() : ", fruits5);
console.log(".shift() : ", fruits5.shift());
console.log(".shift() : ", fruits5);

//  .unshift() method
//  The .unshift() method adds a new element to an array (at the beginning), and "unshifs" older elements:
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".unshift() : ", fruits6);
console.log(".unshift() : ", fruits6.unshift("Lemon"));
console.log(".unshift() : ", fruits6);

//  changing element
console.log("Changing Element : ", fruits6);
console.log("Changing Element : ", (fruits6[0] = "Pinapple"));
console.log("Changing Element : ", fruits6);

//  Deleting element
console.log("Deleting Element : ", fruits6);
console.log("Deleting Element : ", delete fruits6[0]);
console.log("Deleting Element : ", fruits6);
console.log("Deleting Element : ", fruits6[0]);

//  .splice() method
//  The .splice() method can be ued to add new items to an array
//  The first parameter (2) defines the position where new elements should be added (spliced in).
//  The second parameter (0) defines how many elements should be removed.
//  The splice() method returns an array with the deleted items:

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".splice() : ", fruits7);
console.log(".splice() : ", fruits7.splice(2, 0, "Lemon", "Kiwi"));
console.log(".splice() : ", fruits7);
console.log(".splice() : ", fruits7.splice(2, 2));
console.log(".splice() : ", fruits7);
console.log(".splice() : ", fruits7.splice(2, 1, "Lemon", "Kiwi"));
console.log(".splice() : ", fruits7);
console.log(".splice() : ", fruits7.splice(0, 1));
console.log(".splice() : ", fruits7);
console.log("Finished");

//  .slice() method

console.log(".slice() : ", fruits7.slice(2, 3));
console.log(".slice() : ", fruits7.slice(4, 2));
console.log(".slice() : ", fruits7.slice(2, 4));
console.log(".slice() : ", fruits7.slice(1));
console.log(".slice() : ", fruits7.slice(2));
console.log(".slice() : ", fruits7.slice(-1));
console.log(".slice() : ", fruits7.slice(-2));
console.log(".slice() : ", fruits7.slice(0));
console.log("Finished");

console.log((fruits7[3] = "papaya"));
console.log(fruits7);

/* Array Sort */

//  .sort() method
//  The .sort() method sorts an array alphabetically:
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(".sort() : ", fruits8.sort());

//  .reverse() method
//  The .reverse() method reverses the elements in an array.
//  First sort the elements of fruits
//  Then reverse the order of the elements
console.log(".reverse() : ", fruits8.reverse());

//  sorting numbers with .sort() method

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Andrew", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

let psrted = people.sort((a, b) => a.name.localeCompare(b.name));

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log("sorting number using .sort() : ", points);
console.log("sorting Random number using .sort() : ", points2);
console.log("sorting people with name using .sort() : ", psrted);

/* Array Iteration */

//  .forEach()
const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("-----------");
}

numbers.forEach(myFunction);

//  .map()
function myFunction2(value) {
  return value * 2;
}

const newNumber = numbers.map(myFunction2);
console.log("map : ", newNumber);

//  .filter()
function myFunction2(value) {
  return value > 10;
}

const newNumber2 = numbers.filter(myFunction2);

function myFunction3(value) {
  return value < 10;
}

const newNumber3 = numbers.filter(myFunction3);

console.log("filter : ", newNumber2);
console.log("filter : ", newNumber3);

//  .reduce()
function myFunction4(total, value) {
  console.log(total);
  console.log("---------");

  return total + value;
}

const newNumber4 = numbers.reduce(myFunction4);

function myFunction5(total, value) {
  return total + value;
}

const newNumber5 = numbers.reduce(myFunction5, 10);

console.log("reduce : ", newNumber4);
console.log("reduce : ", newNumber5);

//  .every()
//  The .every() method check if all array values pass a test.
//  The example check if all array values are larger than 18:

function myFunction6(value) {
  return value > 18;
}

const newNumber6 = numbers.every(myFunction6);

function myFunction7(value) {
  return value > 1;
}

const newNumber7 = numbers.every(myFunction7);

console.log(".every() : ", newNumber6);
console.log(".every() : ", newNumber7);

//  .some()
//  The .every() method check if all array values pass a test.
//  The example check if some array values are larger than 18:

function myFunction8(value) {
  return value > 18;
}

const newNumber8 = numbers.some(myFunction8);

function myFunction9(value) {
  return value > 180;
}

const newNumber9 = numbers.some(myFunction9);

console.log(".some() : ", newNumber8);
console.log(".some() : ", newNumber9);

//  .find()
//  The .find() method returns the value of the first array element that passes a test function.
//  This example finds (returns the value of) the first element that is larger than 18:

function myFunction10(value) {
  return value > 18;
}

const newNumber10 = numbers.find(myFunction10);
console.log(".find() : ", newNumber10);

//  Array.from()
//  The Array.from() method returns an Array object from any object with a length property or nay iterable object.

let text11 = "ABCDEFG";
let txtArryFrm = Array.from(text11);

console.log(".Array.from() : ", Array.from("ABCDEFG"));
console.log(".Array.from() : ", Array.from(text11));
console.log(".Array.from() : ", txtArryFrm);

/* Array Const OR Constant */
// An array declared with const cannot be reassigned:

const cars4 = ["Saab", "Volvo", "BMW"];
//cars4 = ["Toyota", "Volvo", "Audi"];    // ERROR this will give you an error
console.log(cars4);

//You can change the elements of a constant array:

// You can create a constant array:
const cars5 = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars5[0] = "Toyota";

// You can add an element:
cars5.push("Audi");
console.log(cars5);

//This will not work:

//const cars6;
cars6 = ["Saab", "Volvo", "BMW"];

//This is OK:

var cars7;
cars7 = ["Saab", "Volvo", "BMW"];
console.log(cars7);

//An array declared with const has Block Scope.

//An array declared in a block is not the same as an array declared outside the block:

const cars8 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
console.log(cars8);

{
  const cars8 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
  console.log(cars8);
}
// Here cars[0] is "Saab"
console.log(cars8);

//An array declared with var does not have block scope:

var cars9 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
console.log("var : ", cars9);

{
  var cars9 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
  console.log("var : ", cars9);
}
// Here cars[0] is "Toyota"
console.log("var : ", cars9);

//Redeclaring an array declared with var is allowed anywhere in a program:

var cars10 = ["Volvo", "BMW"]; // Allowed
var cars10 = ["Toyota", "BMW"]; // Allowed
cars10 = ["Volvo", "Saab"]; // Allowed
console.log(cars10);

//Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:

var cars11 = ["Volvo", "BMW"]; // Allowed
// const cars11 = ["Volvo", "BMW"];   // Not allowed
console.log(cars11);

{
  var cars11 = ["Volvo", "BMW"]; // Allowed
  // const cars11 = ["Volvo", "BMW"]; // Not allowed
  console.log(cars11);
}

//Redeclaring an array with const, in another scope, or in another block, is allowed:

const cars12 = ["Volvo", "BMW"]; // Allowed
console.log(cars12);

{
  const cars12 = ["Volvo", "BMW"]; // Allowed
  console.log(cars12);
}
{
  const cars12 = ["Volvo", "BMW"]; // Allowed
  console.log(cars12);
}

/* Math Object */

// Math.round()
// Math.round(x) returns the nearest integer:

console.log("Math.round() : ", Math.round(4.9));
console.log("Math.round() : ", Math.round(4.7));
console.log("Math.round() : ", Math.round(4.5));
console.log("Math.round() : ", Math.round(4.4));
console.log("Math.round() : ", Math.round(4.2));
console.log("Math.round() : ", Math.round(-4.2));
console.log("Math.round() : ", Math.round(-4.5));

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:

console.log("Math.ceil() : ", Math.ceil(4.9));
console.log("Math.ceil() : ", Math.ceil(4.7));
console.log("Math.ceil() : ", Math.ceil(4.5));
console.log("Math.ceil() : ", Math.ceil(4.4));
console.log("Math.ceil() : ", Math.ceil(4.2));
console.log("Math.ceil() : ", Math.ceil(-4.2));
console.log("Math.ceil() : ", Math.ceil(-4.5));

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:

console.log("Math.floor() : ", Math.floor(4.9));
console.log("Math.floor() : ", Math.floor(4.7));
console.log("Math.floor() : ", Math.floor(4.5));
console.log("Math.floor() : ", Math.floor(4.4));
console.log("Math.floor() : ", Math.floor(4.2));
console.log("Math.floor() : ", Math.floor(-4.2));
console.log("Math.floor() : ", Math.floor(-4.5));

// Math.trunc()
// Math.trunc(x) returns the integer part of x:

console.log("Math.trunc() : ", Math.trunc(4.9));
console.log("Math.trunc() : ", Math.trunc(4.7));
console.log("Math.trunc() : ", Math.trunc(4.5));
console.log("Math.trunc() : ", Math.trunc(4.4));
console.log("Math.trunc() : ", Math.trunc(4.2));
console.log("Math.trunc() : ", Math.trunc(-4.2));
console.log("Math.trunc() : ", Math.trunc(-4.5));

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

console.log("Math.sign() : ", Math.sign(-4));
console.log("Math.sign() : ", Math.sign(0));
console.log("Math.sign() : ", Math.sign(4));

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

console.log("Math.pow() : ", Math.pow(8, 2));
console.log("Math.pow() : ", Math.pow(8, 3));
console.log("Math.pow() : ", Math.pow(8, 4));
console.log("Math.pow() : ", Math.pow(8, 5));

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:

console.log("Math.sqrt() : ", Math.sqrt(64));
console.log("Math.sqrt() : ", Math.sqrt(100));
console.log("Math.sqrt() : ", Math.sqrt(3));

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

console.log("Math.abs() : ", Math.abs(-64));
console.log("Math.abs() : ", Math.abs(-100));
console.log("Math.abs() : ", Math.abs(-3));

// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

console.log("Math.sin() : ", Math.sin((90 * Math.PI) / 180));

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
let numbers2 = (0, 150, 30, -8, -200);

// Math.min()
console.log("min : ", Math.min(0, 150, 30, -8, -200));
console.log("min : ", Math.min(numbers2));

// Math.max()
console.log("max : ", Math.max(0, 150, 30, -8, -200));
console.log("max : ", Math.max(numbers2));

// Math.random()
// Math.random(x) returns a random number between 0 (inclusive), and 1 (exclusive):

console.log("Math.random() : ", Math.random());

// Math.log()
// Math.log(x) returns the natural logarithm of x:

console.log("Math.log() : ", Math.log());



