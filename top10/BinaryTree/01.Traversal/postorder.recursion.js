/**
 * recursion
 */
const postorder = (root, arr = []) => {
  if (root) {
    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};

export default postorder;
