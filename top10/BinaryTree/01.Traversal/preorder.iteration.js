/**
 * iteration
 */
const preorder = (root) => {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return result;
};

export default preorder;
