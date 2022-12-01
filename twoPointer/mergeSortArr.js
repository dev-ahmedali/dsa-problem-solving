let nums1 = [2, 5, 7, 10, 15, 24, 33, 44];
let nums2 = [6, 9, 15, 23, 28];

function mergeSortArr(arr1, arr2) {
  let newArr = [];
  let m = 0;
  let n = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[m] < arr2[n]) {
      newArr.push(arr1[m]);
      m++;
    } else if (arr1[m] > arr2[n]) {
      newArr.push(arr2[n]);
      n++;
    } else if (arr1[m] === arr2[n]) {
      newArr.push(arr1[m]);
      newArr.push(arr2[n]);
      m++;
      n++;
    }
    if (newArr.length <= i) {
      if (arr1[m] === undefined) {
        newArr.push(arr2[n]);
        n++;
      } else if (arr2[n] === undefined) {
        newArr.push(arr1[m]);
        m++;
      }
    }
  }
  return newArr;
}

console.log(mergeSortArr(nums1, nums2));
