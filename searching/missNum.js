var missingNumber = function (nums) {
  let n = nums.length;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    n += i;
    total += nums[i];
  }
  return n - total;
};
