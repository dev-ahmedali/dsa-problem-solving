var mySqrt = function (x) {
  let start = 1;
  let end = x;
  if (x < 2) {
    return x;
  }
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid;
    } else if (mid * mid < x) {
      start = mid + 1;
    }
  }
  return start - 1;
};

console.log(mySqrt(4));
