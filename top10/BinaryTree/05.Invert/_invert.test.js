import { TreeNode } from '../utils';

import invert from './invert';

test('invert', () => {
  const tree = new TreeNode(4);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(7);

  tree.left.left = new TreeNode(1);
  tree.left.right = new TreeNode(3);

  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(9);

  const newTree = invert(tree);

  expect(newTree.val).toBe(4);
  expect(newTree.left.val).toBe(7);
  expect(newTree.right.val).toBe(2);

  expect(newTree.left.left.val).toBe(9);
  expect(newTree.left.right.val).toBe(6);

  expect(newTree.right.left.val).toBe(3);
  expect(newTree.right.right.val).toBe(1);
});
