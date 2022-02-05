import { TreeNode } from '../utils';
import pathSum from './pathSum';

test('is balanced: true', () => {
  const tree = new TreeNode(5);
  tree.left = new TreeNode(4);

  tree.left.left = new TreeNode(11);
  tree.left.left.left = new TreeNode(7);
  tree.left.left.right = new TreeNode(2);

  tree.right = new TreeNode(8);
  tree.right.left = new TreeNode(13);
  tree.right.right = new TreeNode(4);
  tree.right.right.left = new TreeNode(5);
  tree.right.right.right = new TreeNode(1);

  const result = pathSum(tree, 22);
  expect(result[0].join()).toBe('5,4,11,2');
  expect(result[1].join()).toBe('5,8,4,5');
});
