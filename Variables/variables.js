/* shortcut for multiple comment line is "shift + alt + A" */

console.log("Hellow World...")

var x = 7;
var y = 10

console.log(x);
console.log({y});
y = x;
console.log({y});

/*   ******************************************************VAR AND LET******************************************************    */

// Instead of var statement, let enables you to declare a variable with block scope "{}". You can see an example below.

var a = 10;

{
    let b = 3;
    console.log("b = " + b);
}
// console.log("a= " + a);
// console.log("b = " + b); // generates an error 

/*   *******************************************************CONST***********************************************************    */

// const x = 5;
// x = 7; // generates an error

// const x; //generates an error
// x = 7

/*   ***************************************************DATA TYPES**********************************************************    */

// JS variables can hold numerous data types, such as numbers, string, booleans, object, and more.
// It is required to declare a variable for creating.
// In JS, we can declare a variable with the var keyword. 

var myNumber;
// In the example above, myNumber value has no value.(actually, the value of myNumber is undefined.)

var myNumber = 10;
//It is necessary to use the equal sign for assigning a value to the variable.

/*   *************************************************DATA TYPES -NUMBERS-**************************************************    */

var x = 7;
//Unlike many other programming languages,JS has only one type of number.

var y = 33.33;
// numbers can be written with decimals

var f; 
console.log(typeof f); // => undefined

f = 5;
console.log(typeof f);// => number

f = 'Hi i am string.'
console.log(typeof f);// => string

/*   *************************************************DATA TYPES -STRING-**************************************************    */

var myName = 'Raif';
//Strings defined as the sequences of characters.
//In JS strings are used for storing and manipulating text.
//A string can be any content that shows up inside quotes. We can use single or double-quote.
//We can use quotes inside a string unless they don't match the quotes encompassing the string
//If we need to use quotes inside the string, we can use backslash (\) escape character
var myAge = "23";
console.log(typeof myAge);// => string

var text2 = 'She said, "Go ahead."';

var text = "He said, \"I am a new programmer.\"";

var Instructor = "Raif";
var greeting = `Hello ${Instructor}` //Template literals
console.log(greeting);
/*
Template literals are literals delimited with backtick (`) characters,
 allowing for multi-line strings, string interpolation with embedded expressions,
 and special constructs called tagged templates.
*/

/*   *************************************************DATA TYPES -BOOLEANS-**************************************************    */

//A JS can have one of two values, either true or false.
//Boolean data type is useful when we need to have one of two values, such as true/false, yes/no etc.
var x1 = 8 > 4;
console.log(typeof x1);
var y1 = 34 == 25;
console.log(typeof y1);

console.log("x1: " + x1);
console.log("y1: " + y1);

//The boolean value of everything with a "value" is true.
var q = Boolean("Hi everybody."); 
var w = Boolean(5);
var e = Boolean(-5); 
var r = Boolean("false"); 
var t = Boolean(3.14 + 8); 
console.log("q: " + q);
console.log("w: " + w);
console.log("e: " + e);
console.log("r: " + r);
console.log("t: " + t);
//The boolean value of everything without a "value" is false.
//The boolean value of 0, null, empty string, undefined is false.
var y = Boolean(""); 
var u = Boolean(0);
var i = Boolean(-0); 
var o = Boolean(null); 
var p; // type of p is undefined
console.log("y: " + y);
console.log("u: " + u);
console.log("i: " + i);
console.log("o: " + o);
console.log("p: " + Boolean(p));

console.log(Boolean(5 > 3)); //true
console.log(Boolean(15 < 12));//false
console.log(Boolean(3 == 5)); //false
console.log(Boolean("0")); //true
console.log(Boolean(null)); //false
/* type of null => object */
console.log(null == false);//false
console.log(null == true);//false
console.log(null == undefined);//true
/* *** */
console.log(2 == '2');//true
console.log(2 === '2');//false
/* *** */
