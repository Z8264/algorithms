const twoSum = (nums, target) => {
  const o = [];
  for (let i = 0, l = nums.length; i < l; i += 1) {
    if (o[target - nums[i]] !== undefined) return [o[target - nums[i]], i];
    o[nums[i]] = i;
  }
  return [];
};

module.exports = twoSum;
