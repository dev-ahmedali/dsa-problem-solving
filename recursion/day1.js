// function countdown(number) {

//     console.log(number);
//     const newNumber = number - 1
//     // base case
//     if(number > 0) {
//         countdown(newNumber)
//     }
// }

// countdown(4)
// Array traverse

// let arr = [10, 20, 30, 40, 50]
// function arrTraverse(arr, i=0){
//     // base case
//     if(arr.length == i) {
//         return
//     }

//     console.log(arr[i]);
//     arrTraverse(arr, i+1)
// }
// arrTraverse(arr)

// sum calculation
let arr = [10, 20, 30, 40, 50, -80, 90];
let sum = 0;
function sumation(arr, i = 0) {
  if (arr.length == i) {
    return;
  }
  sum += arr[i];
  sumation(arr, i + 1);
  return sum;
}
console.log(sumation(arr));
