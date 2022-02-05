const invert = (root) => {
  if (!root) return null;
  const left = invert(root.left);
  const right = invert(root.right);
  root.left = right;
  root.right = left;
  return root;
};

export default invert;
