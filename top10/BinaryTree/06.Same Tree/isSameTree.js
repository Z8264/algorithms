const isSameTree = (p, q) => {
  const pStack = [];
  const qStack = [];

  while (p || q || pStack.length || qStack.length) {
    while (p || q) {
      if (p) pStack.push(p);
      if (q) qStack.push(q);
      if (!p || !q || p.val !== q.val) return false;
      p = p.left;
      q = q.left;
    }
    const pNode = pStack.pop();
    if (pNode) p = pNode.right;

    const qNode = qStack.pop();
    if (qNode) q = qNode.right;
  }
  return true;
};

export default isSameTree;
