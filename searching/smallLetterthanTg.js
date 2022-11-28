let letters = ['c', 'f', 'j'];
let target = 'a';

function nextGreatestLetter(letters, target) {
  let res = letters[0];
  let right = 0;
  let left = letters.length - 1;
  let mid;

  while (left <= right) {
    mid = left + (right - left) / 2;
    if (letters[mid] < target) {
      left = mid + 1;
    } else if (letters[mid] == target) {
      left = mid + 1;
    } else {
      res = letters[mid];
      right = mid - 1;
    }
  }
  return res;
}
console.log(nextGreatestLetter(letters, target));
