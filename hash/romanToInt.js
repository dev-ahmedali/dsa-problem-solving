const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
var romanToInt = function (s) {
  let result = 0;
  for (i = s.length - 1; ~i; i--) {
    let num = map[s.charAt(i)];
    if (4 * num < result) {
      result -= num;
    } else {
      result += num;
    }
  }
  return result;
};
