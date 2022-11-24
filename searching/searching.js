// linear search

let arr = [45, 15, 65, 48, 30, 88, 7, 74, 55, 93];
let target = 7;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return 'item found in index ' + i;
    }
  }
  return 'item not found in index';
}

console.log(linearSearch(arr, target)); 


// binary search

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid;
  let asc;
  if(arr[start] < arr[end]) {
    asc = true
  }
  else {
    asc = false
  }
  
  while(start <= end) {
    mid = Math.floor((start + end)/2)

    if(arr[mid] === target) {
      return 'data found in index ' + mid
    }
    if(asc) {
      if(arr[mid] < target) {
        start = mid + 1
      }
      else {
        end = mid - 1
      }
    } else {
      if(arr[mid] > target) {
        start = mid + 1
      }
      else {
        end = mid - 1
      }
    }
  }
  return -1;
}
console.log(binarySearch(arr2, 80))
console.log(binarySearch([30, 25, 20, 15, 10], 25))