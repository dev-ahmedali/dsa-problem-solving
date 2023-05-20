var removeElement = function (nums, val) {
  let end = nums.length - 1;
  let start = 0;
  while (start <= end) {
    if (nums[end] == val) {
      end--;
    } else if (nums[start] == val) {
      let temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start++;
      end--;
    } else {
      start++;
    }
  }
  return end + 1;
};
