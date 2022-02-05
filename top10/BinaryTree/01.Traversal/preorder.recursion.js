/**
 * recursion
 */
const preorder = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
  }
  return arr;
};

export default preorder;
