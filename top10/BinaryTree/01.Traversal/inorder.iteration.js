/**
 * iteration
 */
const inorder = (root) => {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};

export default inorder;
