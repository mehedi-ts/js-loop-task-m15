/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// task=1
let sumOdd = 0;
for (let i = 81; i <= 131; i++) {
  if (i % 2 !== 0) {
    sumOdd = sumOdd + i;
  }
}
console.log("the sum of all the odd numbers from 81 to 131 is: ", sumOdd);

// task=2
let sumEven = 0;
for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    sumEven = sumEven + i;
  }
}
console.log("the sum of all the even numbers from 206 to 311 is: ", sumEven);
