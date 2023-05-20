var sortColors = function (nums) {
  let l = 0;
  let i = 0;
  let r = nums.length - 1;
  while (i <= r) {
    if (nums[i] == 0) {
      swap(nums, l++, i++);
    } else if (nums[i] == 2) {
      swap(nums, i, r--);
    } else {
      i++;
    }
  }
};

var swap = function (nums, p1, p2) {
  let temp = nums[p1];
  nums[p1] = nums[p2];
  nums[p2] = temp;
};
