const maxSubArray = (nums) => {
  let [max, sum] = [nums[0], 0];
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};
module.exports = maxSubArray;
