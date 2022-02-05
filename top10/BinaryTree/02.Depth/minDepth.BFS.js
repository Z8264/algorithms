/**
 * BFS
 */
const minDepth = (root) => {
  if (!root) return 0;
  const queue = [root];
  let level = 1;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right)queue.push(node.right);
      if (!node.left && !node.right) return level;
      len -= 1;
    }
    level += 1;
  }
  return level;
};

export default minDepth;
