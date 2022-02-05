class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const construct = (preorder, inorder) => {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    const rootVal = preorder[p_start]; // 根节点的值
    const root = new TreeNode(rootVal); // 根节点
    const mid = map.get(rootVal); // 根节点在inorder的位置
    const leftNum = mid - i_start; // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  };
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

export default construct;
