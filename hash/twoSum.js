/* hash map
  
  input=[1, 5, 9] 
  target = 10
 map = {1: 0, 5: 1}
  i = 0
  value = 1
  complement_pair = 10 - 1
 */

function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complement_pair = target - value;
    if (map[complement_pair] !== undefined) {
      return [map[complement_pair], i];
    } else {
      map[value] = i;
    }
  }
}

const result = twoSum([1, 5, 9], 10);
console.log(result);
