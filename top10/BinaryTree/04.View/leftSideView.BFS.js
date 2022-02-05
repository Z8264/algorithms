/**
 * BFS
 */
const leftSideView = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    let first = true;
    while (len) {
      const node = queue.shift();
      if (first) {
        result.push(node.val);
        first = false;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
  }
  return result;
};

export default leftSideView;
