//You can visualize you code from this website. "https://pythontutor.com/"
document.write("Hi. You are in loops folder.");

/*   ************************************************Table of Contents******************************************************    */
/*
-Loops                                      -for Statement
-Placement                                  -break Statement
-while Statement                            -contunie Statement
-do...while Statement               
*/
/*   *****************************************************Loops*************************************************************    */
//JS loops provides a fast and easy way to perfor repetetive tasks. They offer only a few of lines of code to perfor iterations.
//Iteration is the number of times the function is to be performed (this number may even be zero). 
//Make sure you understand all of them so that the best loop statement can be applied for a given situation.

/*   **************************************************while Statement********************************************************  */
//A while statement execute its statement as long as it is true for a specified condition.

/*
while (condition) {
    //body of the loop
    //statement to be executed

    //updation
}
//statement outside the loop.
*/

/*You can remove comments code and try it!
var i = 0, sum = 0;

while (i < 6) {
    var sum = sum + i;//statement to be executed
    i++;//updation
}
console.log(`The total is: ${sum}`);//statement outside the loop. 
*/

/*You can remove comments code and try it!
let i = 0, sum = 0;

while (i < 10) {
    sum += i;
    console.log({i}, {sum});
    i++;
}
console.log(sum);//Output: 45
*/

/*You can remove comments code and try it!
let i;

while (isNaN(i)) {
    i = +prompt("Please, enter a number.");
}
console.log(`Your number is ${i}`);// Entered a number.
*/

/*You can remove comments code and try it!
//An example for infinite while loops
//This loop has a problem. Because we forgot to add updation code. 
let i = 0;
while (i < 2) {
    console.log(i);
}
*/

/*   **************************************************do..while Statement***************************************************  */
//The do..while statement repeats until false is evaluated by the specified condition.
//The difference between while and do-while loops is that code will execute at least once in the do-while loop.

/*
do {
    statement
} while (condition )
*/

/*You can remove comments code and try it!
let i = 5, sum = 0;

do {
    sum = sum + i;
    i++;
} while (i < 5);
console.log(`The total is: ${sum}`);
*/

/*You can remove comments code and try it!
var i = 0, sum = 0;
do {
    sum += i;
    i++;
} while (i < 6);
console.log("The total is: " + sum);
*/

/*You can remove comments code and try it!
let i = 10, sum = 0;
do {
    sum += i;
    i++;
    console.log(i, sum);
} while (i <6);
console.log({i}, {sum});
*/

/*You can remove comments code and try it!
let i;

do {
    i = +prompt("Please, enter a number."); 
} while (isNaN(i));

console.log(`Your number is ${i}`);// Entered a number.
*/

/*   **************************************************for Statement**********************************************************  */
//A for loops repeats until false is evaluated by a specified condition.

/*for loop
for ([initialExpression]; [condition]; [incrementExpression]) {
    statement
}
*/

/*You can remove comments code and try it!
for (var i = 0; i < 10; i++){
    console.log('i: ' + i);// code to execute during loop
}
*/

/*You can remove comments code and try it!
var sum = 0;
for (var i = 0; i < 7; i++) {
    sum += i
    console.log({i});
    console.log({sum});
}
console.log("the total is: " + sum);
*/

/*You can remove comments code and try it!
var bests = ["BNT Group", "Google", "Amazon", "Tesla"];
var i = 0, len = bests.length;

for (; i < len; ) {
    console.log((i + 1) + " : " + bests[i]);
    i++;
}
*/

/*You can remove comments code and try it!
let i = 0;
for (; i < 8;) {
    console.log(i);
    i++;
}
console.log({i});
*/


/*   **************************************************Length Property********************************************************  */

// let str = 'BNTGroup'

// console.log(str.length);
// console.log(str[7]);
// console.log(str[str.length - 1]);// to reach the last statement
// for (let i = 0; i < str.length; i++) {
//     console.log({i},str[i]);
// }
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);   
// }

/*   ************************************************Break Statement**********************************************************  */
//To terminate a loop, switch or in conjuction with a label statement, use the break statement. ("jumps out" of a loop.)

/*You can remove comments code and try it!
var i = 0;
while (i < 10) {
    if (i === 3) {
        break;
    }
    i++;
}
console.log(3);
*/

/*   ************************************************Continue Statement*******************************************************  */
/*If a specified condition occurs, the continuation clause breaks one iteration (in the loop) and continues with the next 
iteration in the loop. */

/*You can remove comments code and try it!
var i;
for (let i = 0; i < 7; i++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(i);
}
*/

/*You can remove comments code and try it!
// Let's print from 0 to 100 with the for loop, but skip the multiples of 5 and 5.

for(let i = 0; i <= 100; i++){
    if(i % 5 === 0) {
        continue;
    }
    console.log(i);
}// we can't print 0, because 0 % 5 = 0. 
*/

/*You can remove comments code and try it!
// get rid of the endless loop
while(true){
    let x = prompt("Please enter a number: \n You can log out with pressing 'Q'")
    if(x == "Q" || x == "q"){
        console.log("logged out.");
        break;
    }else if (isNaN(x)) {
        continue;
    } else {
        console.log(`square ${x} = ${x**2}`);
        break;
    }
}
*/

/*   ************************************************Math.random**************************************************************  */

// console.log(Math.random()*6+1);
// console.log(Math.trunc(Math.random()*6+1));

// get rid of the endless loop
let x,y;
let count = 0;
let even = 0;
while (true) {
    x = Math.trunc(Math.random()*6)+1;
    y = Math.trunc(Math.random()*6)+1;
    if (x == 6 && y == 6){
        count++;
        console.log(x,y, 'You WON!');
        break;
    }else if (x == y && x != 6){
        even++
        console.log(x,y,`${even}. even numbered dice.`);
        if(even === 3){
            console.log("You LOST!");
            break;
        }
    }
    console.log(x,y);
    count++;
}   

console.log(count);
