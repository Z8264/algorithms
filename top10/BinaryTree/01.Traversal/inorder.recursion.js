/**
 * recursion
 * @param {TreeNode} root
 */
const inorder = (root, arr = []) => {
  if (root) {
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  }
  return arr;
};

export default inorder;
