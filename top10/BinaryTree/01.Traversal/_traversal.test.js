import { TreeNode } from '../utils';
import inorderDFS from './inorder.recursion';
import inorderBFS from './inorder.iteration';
import preorderDFS from './preorder.recursion';
import preorderBFS from './preorder.iteration';
import postorderDFS from './postorder.recursion';
import postorderBFS from './postorder.iteration';
import levelOrderDFS from './levelOrder.recursion';
import levelOrderBFS from './levelOrder.iteration';

test('traversal', () => {
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.right.left = new TreeNode(3);

  expect(inorderDFS(tree).join()).toBe('1,3,2');
  expect(inorderBFS(tree).join()).toBe('1,3,2');

  expect(preorderDFS(tree).join()).toBe('1,2,3');
  expect(preorderBFS(tree).join()).toBe('1,2,3');

  expect(postorderDFS(tree).join()).toBe('3,2,1');
  expect(postorderBFS(tree).join()).toBe('3,2,1');

  expect(levelOrderDFS(tree).join()).toBe('1,2,3');
  expect(levelOrderBFS(tree).join()).toBe('1,2,3');
});
