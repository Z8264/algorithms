/**
 * recursion
 */
const isBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
};

export default isBST;
