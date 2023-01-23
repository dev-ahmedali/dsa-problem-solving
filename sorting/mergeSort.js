let arr = [20, 10, 50, 40, 30];
let newArr = [];

function mergeSort(arr, l, r) {
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    mergeSort(arr, l, mid); //left
    mergeSort(arr, mid + 1, r); //right

    mergeSubArr(arr, l, mid, r);
  }
}

function mergeSubArr(arr, l, mid, r) {
  let i = l;
  let r = mid + 1;
  let k = i;

  while (i <= mid && j <= r) {
    if (arr[i] <= arr[j]) {
      newArr[k] = arr[i];
      i++;
    } else {
      newArr[k] = arr[j];
      j++;
    }
    k++;
  }

  // copy rest values
  if (i > mid) {
    // copy j values
    while (i <= mid) {
      newArr[k] = arr[i];
      i++;
      k++;
    }
  } else {
    while (i <= r) {
      newArr[k] = arr[j];
      j++;
      k++;
    }
  }

  // copy to original arr
  for(let z = l; z <= r; z++) {
    arr[z] = newArr[z];
  }
}

mergeSort(arr, 0, arr.length - 1);
