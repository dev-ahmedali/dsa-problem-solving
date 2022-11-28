let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 30;

function flooringCeiling(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let asc;
  if (arr[start] < arr[end]) {
    asc = true;
  } else {
    asc = false;
  }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `flooring ${mid-1} and celing ${mid}`;
    }
    if (asc) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1
}

console.log(flooringCeiling(arr, target))
