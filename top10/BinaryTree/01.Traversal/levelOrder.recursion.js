/**
 * recursion
 */
const levelOrder = (root, level = 0, arr = []) => {
  if (root) {
    if (!arr[level]) arr[level] = [];
    arr[level].push(root.val);
    levelOrder(root.left, level + 1, arr);
    levelOrder(root.right, level + 1, arr);
  }
  return arr;
};

export default levelOrder;
