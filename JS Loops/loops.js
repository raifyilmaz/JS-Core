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


/*   *************************************************************************************************************************  */

let str = 'BNTGroup'

// console.log(str.length);
// console.log(str[7]);
// console.log(str[str.length - 1]);// to reach the last statement
for (let i = 0; i < str.length; i++) {
    console.log({i},str[i]);
}
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);   
// }
