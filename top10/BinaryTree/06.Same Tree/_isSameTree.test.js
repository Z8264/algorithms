import { TreeNode } from '../utils';
import isSameTree from './isSameTree';

test('is same tree: null', () => {
  const [p, q] = [null, null];

  expect(isSameTree(p, q)).toBe(true);
});

test('is same tree: true', () => {
  const p = new TreeNode(1);
  p.right = new TreeNode(2);
  p.right.left = new TreeNode(3);

  const q = new TreeNode(1);
  q.right = new TreeNode(2);
  q.right.left = new TreeNode(3);

  expect(isSameTree(p, q)).toBe(true);
});

test('is same tree: false', () => {
  const p = new TreeNode(1);
  p.right = new TreeNode(2);
  p.right.left = new TreeNode(3);

  const q = new TreeNode(1);
  q.right = new TreeNode(2);

  expect(isSameTree(p, q)).toBe(false);
});
