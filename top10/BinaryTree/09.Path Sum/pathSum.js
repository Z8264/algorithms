const pathSum = (root, sum = 0) => {
  const result = [];
  const fn = (node, total, nums) => {
    total += node.val;
    nums.push(node.val);
    if (node.left || node.right) {
      if (node.left) fn(node.left, total, nums.slice());
      if (node.right) fn(node.right, total, nums.slice());
    } else if (total === sum) {
      result.push(nums);
    }
  };
  return (root && fn(root, 0, [])) || result;
};

export default pathSum;
