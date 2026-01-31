/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let i = 1;
let n = 2;
while (i <= 100) {
  if (i === n * n) {
    console.log("the first square number is ", i);
    break;
  }
  console.log(i);
  i++;
}
