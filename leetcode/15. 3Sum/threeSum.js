const threeSum = (nums) => {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1] && nums[i] <= 0) {
      let [left, right] = [i + 1, nums.length - 1];
      let sum;
      while (left < right) {
        sum = nums[i] + nums[left] + nums[right];
        if (sum > 0) right -= 1;
        else if (sum < 0) left += 1;
        else {
          res.push([nums[i], nums[left], nums[right]]);

          while (nums[left] === nums[left + 1]) left += 1;
          while (nums[right] === nums[right - 1]) right -= 1;
          left += 1;
          right -= 1;
        }
      }
    }
  }
  return res;
};
module.exports = threeSum;
