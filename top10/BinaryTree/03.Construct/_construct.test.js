import constructPreIn from './construct.pre-in';
import constructPostIn from './construct.post-in';

test('depth', () => {
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  const postorder = [9, 15, 7, 20, 3];

  let tree = constructPreIn(preorder, inorder);

  expect(tree.val).toBe(3);
  expect(tree.left.val).toBe(9);
  expect(tree.right.val).toBe(20);
  expect(tree.right.left.val).toBe(15);
  expect(tree.right.right.val).toBe(7);

  tree = constructPostIn(inorder, postorder);

  expect(tree.val).toBe(3);
  expect(tree.left.val).toBe(9);
  expect(tree.right.val).toBe(20);
  expect(tree.right.left.val).toBe(15);
  expect(tree.right.right.val).toBe(7);
});
