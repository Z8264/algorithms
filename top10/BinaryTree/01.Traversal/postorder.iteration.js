/**
 * iteration
 */
const postorder = (root) => {
  const stack = [];
  const result = [];

  let prev;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      result.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return result;
};

export default postorder;
