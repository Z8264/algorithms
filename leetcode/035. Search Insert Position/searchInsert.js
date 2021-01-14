const searchInsert = (nums, target) => {
  if (target > nums[nums.length - 1]) return nums.length;
  if (target < nums[0]) return 0;

  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const median = parseInt((left + right) / 2, 10);
    if (target < nums[median]) right = median - 1;
    else if (target > nums[median]) left = median + 1;
    else return median;
  }
  return left;
};

module.exports = searchInsert;
