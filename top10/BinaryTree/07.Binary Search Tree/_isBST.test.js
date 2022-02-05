import { TreeNode } from '../utils';
import isBST from './isBST';

test('is BST: true', () => {
  const tree = new TreeNode(2);
  tree.left = new TreeNode(1);
  tree.right = new TreeNode(3);

  expect(isBST(tree)).toBe(true);
});

test('is BST: false', () => {
  const tree = new TreeNode(2);
  tree.left = new TreeNode(3);
  tree.right = new TreeNode(3);

  expect(isBST(tree)).toBe(false);
});

test('is BST: false', () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(1);

  expect(isBST(tree)).toBe(false);
});
