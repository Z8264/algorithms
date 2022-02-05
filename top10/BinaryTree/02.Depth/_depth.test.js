import { TreeNode } from '../utils';
import maxDepthDFS from './maxDepth.DFS';
import maxDepthBFS from './maxDepth.BFS';
import minDepthDFS from './minDepth.DFS';
import minDepthBFS from './minDepth.BFS';

test('depth', () => {
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.left = new TreeNode(2);
  tree.right.left = new TreeNode(3);
  tree.right.right = new TreeNode(3);

  expect(maxDepthDFS(tree)).toBe(3);
  expect(maxDepthBFS(tree)).toBe(3);

  expect(minDepthDFS(tree)).toBe(2);
  expect(minDepthBFS(tree)).toBe(2);
});
