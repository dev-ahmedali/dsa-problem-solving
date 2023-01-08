var targetIndices = function(nums, target) {
    nums = nums.sort((a, b) => {
        return a - b;
    })

    let res = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) {
           res.push(i)
        }
    }
    return res;
};