/*   *************************************************TABLE OF CONTENTS*****************************************************    */

//Operators
//Arithmetic Operators
//Assignment Operators
//Comparison Operators
//Logical Operators
//Nullish Coalescing Operators

/*   ****************************************************OPERATORS**********************************************************    */

//Let's take a simple 3+2 phrase equals 5.number 3 and 2 are operands, and '+' is the operator.
//Expressions rely on operators to create a single value from one or more values.
//JS supports the operators of the following types;
/*
-Arithmetic Operators => +, -, /, *, ++, --, %
-Assignment Operators =>
-Comparison Operators =>
-Logical Operators =>
*/

/*   *************************************************Arithmetic Operators**************************************************    */

//Arithmetic operators execute arithmetic functions on numbers(literals or variables).
//You can check MDN operator precedence!
/*
NAME                                      OPERATORS                          EXAMPLE                         RESULT
ADDITTION                                     +                              10 + 5                             15
SUBTRACTION                                   -                              10 - 5                             5          
DIVISION                                      /                              10 / 5                             2        
MULTIPLICATION                                *                              10 * 5                             50              
INCREMENT                                    ++                              var i = 10;                        
/n                                                                            i++;                              11

DECREMENT                                    --                              var i = 10;                        
/n                                                                           i--;                               9                                   
MODULUS                                       %                              10 % 3                             1        
*/
/*
let x = 5;
let y = 2;
let z = 21;
let t = '2';
var a = 5;
var b = '2';

console.log(x + y);// result => 7

console.log(x - z);// result => -16

console.log(z / x);// result => 4.2

console.log(z * x);// result => 105

console.log(x++);//   result => 5 !?!?!?

console.log(z--);//   result => 21 ?!?!?!

console.log(z % x);// result => 2 ?!?!?!?

console.log(a + b);// result => 52

// console.log(x + t);// result => 62  ?!?!?!?!

console.log(5 + "2");//result => 52


console.log(z--);// result => 20

console.log(z % x);// result => 1

console.log(x++);// result => 6
*/

/*
var c = 8;

console.log(c--);// result => 8
console.log(c);// result => 7

var d = c++;

console.log({d} , {c});// result => { d: 7 } { c: 8 }
*/

/*
var number = 8;

console.log(number++ + ++number);// result => 18 

//In line 86, the result is 18. Bc at first operand, our result is 8.
// but if we print number after (number++) operand, the result is gonna be 9.
// when we skip second operand, (++number) means 1 + number = 10.
// Bc number was 9, after first calculision. So 8 + 10 = 18. 
*/

/*
var stringNumber = "10";

console.log(stringNumber);
console.log(stringNumber++);
console.log(stringNumber);
*/

/*
var input = prompt("Enter User Name.");
console.log(input, typeof input);// result => string

// var input = +prompt("Enter your age.");
// console.log(input, typeof input);// result => number
*/

/*
let alfaString = '8';
alfaString = -alfaString 
console.log(alfaString, typeof alfaString);
*/

/*
//Exponentiation (**)
console.log((2 ** 3) ** 2);// result => 64
*/

/*   *************************************************Arithmetic Operators**************************************************    */
//Assignment operators assign values to JS variables
/*
    OPERATOR                                   EXAMPLE                           MEANING
       =                                        x = y                             x = y
       +=                                       x += y                          x = x + y                    
       -=                                       x -= y                          x = x - y
       *=                                       x *= y                          x = x * y
       /=                                       x /= y                          x = x / y
       %=                                       x %= y                          x = x % y    
*/

/*   *************************************************Comprasion Operators**************************************************    */
//Comparison operators are used to determine equalities or difference between variables or values in logical statement.
//All comprasion operators return Boolean (true / false).
/*
    OPERATOR                                    DESCRIPTION                           EXAMPLE
       ==                                         Equality                            3 == 2 //false  
       !=                                        Inequality                           3 != 2 //true                 
       ===                                 Identity/Strict equality                    
    /n                                     (equal and same of type)                   3 === 2//false  
       !==                               Non-identity/Strict inequalty                3 !== 2//true
       >                                         Greater than                         3 > 2 // true
       >=                                    Greater than or equal                    3 >= 2// true      
       <                                          Less than                           3 < 2 // false
       <=                                      Less than or equal                     3 <= 2// false
*/

/*
let x = 5;
console.log("x == 8 : " + (x == 8));
console.log("x == '5' : " + (x == "5"));
console.log("x === '5' : " + (x === "5"));
console.log("x != 8 : " + (x != 8));
console.log("x > 8 : " + (x > 8));
console.log("x < '6' : " + (x < "6"));
console.log("x >= 4 : " + (x >= 4));
console.log("x <= 9 : " + (x <= 9));

// x == 8 : false
// x == '5' : true
// x === '5' : false
// x != 8 : true
// x > 8 : false
// x < '6' : true
// x >= 4 : true
// x <= 9 : true
*/

/*
var a = 'a' //a means 97 in ASCII table. 
var b = '20'//string 20 means 50 in ASCII table 

console.log(a.charCodeAt());
console.log(b.charCodeAt());
console.log(a > b);// 97 > 50 => true
*/

/*   *************************************************Logical Operators**************************************************    */
//Logical operators, also known as Boolean operators, are used to determine logic between variables or values and return true or false.
//Seeing as x=3 and y=2, logical operator are explain in the table below.  
/*
    NAME                    OPERATOR                         DESCRIPTION                           EXAMPLE
    and                        &&              Returns true, if both operands are true             (x<5 && y<3)//false                     
    or                         ||            Returns true, if one of the operands are true         (x==3 || y==5)//true
    not                        !           Returns true, if the operands is false, and false       !(x==y)//true
/n                                                      if the operand is true               
*/

/*
var a = (true || false);//true
console.log(a); 

var b = (false && true);//false
console.log(b);
var c = (true && true);
console.log(c);//true

console.log(null && NaN);
*/

/*
var capitalLetter = true;
var symbol = true;
var passLenght = false;

var result = capitalLetter && symbol && passLenght;
console.log(result || ('Try again!'));
*/

/*   *************************************************Nullish Coalescing Operators**************************************************    */

/*
1-) The nullish operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is 
null   or undefined, and otherwise returns is left-hand side operand.
2-) Contrary to the logical OR (||) operator, the left operand returned if it is a falsy value that is not null or undefined. 
*/

/*
const foo = null ?? 'default string';
console.log(foo); //expected output: default string

const baz = 0 ?? 42;
console.log(baz); //expected output: 0

const nullValue = null;
const emptyText = ""; //falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA);// default for A
console.log(valB);// '' (as the empty string is not null or undefined)
console.log(valC);// 42
*/
