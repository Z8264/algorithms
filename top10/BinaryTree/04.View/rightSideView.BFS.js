/**
 * BFS
 */
const rightSideView = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (len === 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
  }
  return result;
};

export default rightSideView;
