/* eslint-disable no-param-reassign */
const removeDuplicates = (nums) => {
  let len = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) { nums[len] = nums[i]; len += 1; }
  }
  return len;
};

module.exports = removeDuplicates;
