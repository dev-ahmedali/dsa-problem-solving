var isAnagram = function (s, t) {
  // check length both are equal
  if (s.length !== t.length) {
    return false;
  }
  // map
  const letters = {};
  for (let char of s) {
    if (!letters[char]) {
      letters[char] = 1;
    } else {
      letters[char]++;
    }
  }

  for (let char of t) {
    if (!letters[char]) {
      return false;
    }
    if (letters[char] < 1) {
      return false;
    }
    if (letters[char]) {
      letters[char]--;
    }
  }
  return true;
};
