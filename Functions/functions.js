//You can visualize you code from this website. "https://pythontutor.com/"
/*   ************************************************Table of Contents******************************************************    */
/*
-Functions                                  -Calling A Function
-Function Expression                        -Function Constructor
-Function Constructor                       -Arrow Function
-Examples
*/

/*   **************************************************Functions**************************************************************  */

//A JS feature is a block of code that is programmed to perform a specific task.

/*
function addTwo(parameters) {
    return parameters + 2;
}
console.log(addTwo(4)); //=>output will be 6.
*/

/*
The function squares takes one parameter, called number. 
The Function consist of one statement that says to return the parameters of the function (that is, number) multiplied by itself.
The statement return specifies the value return by the function.

Primitive parameters(such as a number) are transfered to functions by value; the value is passed to the function,
but this adjustment is not expressed globally or in the calling function if the function change the value of the parameter.

function square(number){
    return number*number;
}
*/

/*   **************************************************Calling A Functions****************************************************  */


/*
1. The functions can store the instructions for specific task.
2. When you need the script to perform that task, you call the function.
3. The function executes the code in that code block.
4. When it has finished, the code continues to run from the point where it was initially called.

(1)function sayHello(){
(3)    return document.write('Hello!');
}


//...code before hello
(2)sayHello();
(4)//code after hello...
*/

/*The code within the function will be executed when the function is invoked with just one line of code.
function square(number) {
    return number * number;
}
var result = square(8); //calling function
console.log("Square: " + result);
*/

/*You can remove comments code and try it!
function sayHi() {
    return "Hello!";
}

console.log(sayHi());
sayHi();
sayHi();
*/

/*You can remove comments code and try it!
let userName = "Raif";

function sayHi(name = "Guest User"){
    return `Hello ${name}`;
}
console.log(sayHi(userName));
console.log(sayHi("Marko"));
console.log(sayHi());
*/

/*You can remove comments code and try it!
function sayHi() {
    return "Hello!";
}
console.log(typeof sayHi());
*/

/*You can remove comments code and try it!
function square(number){
    return number*number;
}
console.log(typeof square());
*/

/*You can remove comments code and try it!
function multiply(num1 = 12, num2 = 0){
    return num1 + num2;
}
console.log(multiply());
console.log(multiply(16));
console.log(multiply(16,20));
*/

/*   **************************************************Function Expression****************************************************  */

//We can also describe a JS using function exoression.

//A Function expression is very similar to a function statement and has almost the same syntax.

//The main difference between a function expression and a function statement is the function name that can be omitted to create 
//anonymous functions in function expression.

/*You can remove comments code and try it!
let square = function(number){return number*number;}
console.log(square());
*/

/*   **********************************************Function Constructor*******************************************************  */
//We can also describe a JS function using a function constructor

/*You can remove comments code and try it!
const square = new Function("number", "return number * number");
console.log(square(5));
console.log(typeof square);
*/

/*   **************************************************Arrow Function*********************************************************  */
//Will be added in next commit


/*   ******************************************************Examples***********************************************************  */

/*You can remove comments code and try it!
let sum = function (a,b) {return a + b;}

let addTwo = function (num1 = 0) {
    return sum(num1,2);
}
console.log(addTwo())
*/

/*You can remove comments code and try it!
//Shortcut portrayal
function sayHello(name){
    return name && console.log(`Hello ${name}`);
    //       1  &&             3                 => 3
}
sayHello()
sayHello("Alice")
*/

/*You can remove comments code and try it!
//The function should not change the value given to itself
function square(num1) {
    // num1 * num1;          //desired situation
    // return num1;
    myNum = num1 * num1;     //adverse situation
    return num1;             
}

let myNum = 4;

console.log(square(myNum));
console.log(myNum);
*/


