var searchInsert = function (nums, target) {
  let si = 0;
  let ei = nums.length - 1;
  while (si <= ei) {
    let mid = Math.floor((si + ei) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      si = mid + 1;
    } else {
      ei = mid - 1;
    }
  }
  return ei + 1;
};
