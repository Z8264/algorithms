/* eslint-disable no-param-reassign */
const removeElement = (nums, val) => {
  let len = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) { nums[len] = nums[i]; len += 1; }
  }
  return len;
};
module.exports = removeElement;
