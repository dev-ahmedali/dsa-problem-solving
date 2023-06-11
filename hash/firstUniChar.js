var firstUniqChar = function (s) {
  let uniqueChar = {};

  for (let char of s) {
    if (!uniqueChar[char]) {
      uniqueChar[char] = 1;
    } else {
      uniqueChar[char]++;
    }
  }
  for (let key in uniqueChar) {
    if (uniqueChar[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
