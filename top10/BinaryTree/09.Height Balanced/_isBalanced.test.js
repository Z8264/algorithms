import { TreeNode } from '../utils';
import isBalanced from './isBalanced';

test('is balanced: true', () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(2);
  tree.right.left = new TreeNode(3);
  tree.right.right = new TreeNode(3);

  expect(isBalanced(tree)).toBe(true);
});

test('is balanced: false', () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(2);

  tree.left.left = new TreeNode(3);
  tree.left.right = new TreeNode(3);

  tree.left.left.left = new TreeNode(4);
  tree.left.left.right = new TreeNode(4);

  expect(isBalanced(tree)).toBe(false);
});
