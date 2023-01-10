/*   *************************************************Conditional Statements************************************************    */

/*
1-  Based on different conditions, conditional statements are used to decide the execution flow.If a condition is true,
one action can be perform and you can perform another action if condition is false. 
2-  You want to perform different actions for different decision very often when you write code.
*/

/*
The following conditional statements are available in JS;
IF STATEMENT: If specified condition is true, use if to specify a code block to be executed.
ELSE: If the condition is false, use else to specify a code block to be executed.
ELSE IF: If the first condition is false, use else if to specify to a new condition to test.
SWITCH: Compare a value with multiple variants.
*/

/*   **********************************************The if Statement*********************************************************    */
//The following conditional statements are available in JS

/*
if (condition) {
    //Statement(if condition is true,statement to be execute)
}

if (score >= 50) {
    congraluate();
}
*/

/*You can remove comments code and try it!
var x = 3;
if (x === 3) {//Output => true
    console.log(x == 3); //Statement(if the condition is true, statement to be execute.)
}
*/
/*   *********************************************The if else Statement*****************************************************    */
//If the condition is false, use other statement to define a block of code to be executed.
/*
if (condition) {
    //Statement (if the condition is true, statement to be execute.)
}else {
    //Statement (if the condition is false, statement to be execute.)
}
*/
/*
if (score >= 50) {
    congraluate();
}else {
    encourage();
}
*/

/*You can remove comments code and try it!
var time = 8;
if (time < 11) {//Output => Good morning!
    console.log("Good morning!");
} else {
    console.log("Good day!")
} 
*/

/*   ******************************************The if..else if..else Statement**********************************************    */
//If the first condition is false, use other if the statement defines a new condition.
/*
if (condition_1) {
    //Statement_1 (if the condition_1 is true, statement_1 to be execute.)
}else if (condition_2) {
    //Statement_2 (if the condition_1 is false & condition_2 is true, statement_2 to be execute.)
}else {
    //Statement_3 (if the condition_1 & condition_2 are false, statement_3 to be execute.)
}
*/

/*You can remove comments code and try it!
var time = 21;
if (time < 11) {//Output => Good Evening!
    console.log("Good Morning!");
}else if (time < 18) {
    console.log("Good Afternoon!");
}else {
    console.log("Good Evening!");
}
*/

//Examples;

// let score = +prompt("Enter your score.");
/*You can remove comments code and try it!
let score = 49
let grade = score >= 50

if (grade) {
    console.log("congrulations! You passed.")
}else {
    console.log("try again =(")
}
*/

/*You can remove comments code and try it!
let score = 60;

if (score > 80) {
    console.log("Congrats, you are very smart!");
}else if (score >= 50) {
    console.log("Congrats, you passed");
}else {
    console.log("Sorry, you failed")
}
*/

/*You can remove comments code and try it!
//Nested if statement
if (score >= 50) {

    if (score > 80) {
        console.log("Congrats, you are very smart!");
    }else {
        console.log("Congrats, you passed");
    }

}else {
    console.log("Sorry, you failed");
}
*/

/*   *********************************************Ternary if Statement******************************************************    */

/*You can remove comments code and try it!
var score = 49;
score >= 50 ? console.log("Congrats, you passed") : console.log("Sorry, you failed");
*/

/*   *********************************************The Switch Statement******************************************************    */
/*
Switch case statement is used to compare the value of a variable with multiple values
 and execute some statements based on the match
*/
/*It's an example of switch statement!
switch (level) {
    case 'One':
        title = "Level 1";
        break;
    case 'Two':
        title = "Level 2";
        break;
    case 'Three':
        title = "Level 3";
        break;
    default:
        title = "Level 1";
        break;
}
*/

/*You can remove comments code and try it!
var product = 'eraeser';
var message;
switch (product) {
    case 'pen':
        message = "Pen is $0.93.";
    break;
    case 'eraeser':
        message = "Eraeser is $0.50.";
    break;
    case 'pencil':
        message = "Pencil is $0.80.";
    break;
    default:
        message = "Select a product."
    break;
}
console.log(message);
*/

/*You can remove comments code and try it!
var text;
var fruits = prompt("enter your favorite fruit!");
//toLowerCase() makes all letter to lower case!
// fruits = fruits.toLowerCase()//you can also use in the switch's key!

switch (fruits.toLowerCase()) {
    case 'banana':
        text = "Banana is awesome";
    break;
    case 'lime':
    case 'lemon':
    case 'mandarin':
    case 'orange':
        text = `${fruits.toLowerCase()} is tasty`;
    break;
    case 'apple':
        text = "Apple is sour";
    break;
    case 'strawberry':
        text = "This is Alice's favorite fruit!! I love you alice!";
    break;
    default:
        text = "What is your favorite fruit? Strawberry, Banana, Apple, or Orange?";
    break;
}
console.log(text);
*/

/*You can remove comments code and try it!
//Create a switch statement using the data below.
//monday wednesday thursday and saturday in class
//tuesday and friday team work
//sunday is holiday

let day = prompt("Please, enter a day!");
day = day.toLowerCase()
// console.log(day);
let message;

switch (day) {
    case 'monday':
    case 'wednesday':
    case 'thursday':
    case 'saturday':
        message = `We have class on ${day}.`
    break;
    case 'tuesday':
    case 'friday':
        message = `We have team work on ${day}`
    break;
    case 'sunday':
        message = "Sunday is off, YAAAY!"
    break;
    default:
        message = 'Please, enter a correct day!'
    break;
}
console.log(message);
*/

/*You can remove comments code and try it!
let year = 2052;
let month = 2;
let dayCount;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
    break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0)) {
            dayCount = 29;
        }else {
            dayCount= 28;
        }
    break;
    default:
        dayCount= -1; //invalid month
}
console.log(dayCount); //Output => 29
*/

/*You can remove comments code and try it!
let score = 98;
let grade = score > 80;

if (grade) {
    console.log("Congrats, you are very smart!");
}else if (score >= 50) {
    console.log(`Congrats, your score is ${score}.You passed.`);
}else {
    console.log("You failed.");
}
*/

// Build a simple calculator with switch case structure