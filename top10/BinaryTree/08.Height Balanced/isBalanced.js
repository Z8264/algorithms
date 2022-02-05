const isBalanced = (root) => {
  const fn = (node) => {
    if (!node) return 0;
    const left = fn(node.left);
    const right = fn(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  };
  return fn(root) >= 0;
};

export default isBalanced;
