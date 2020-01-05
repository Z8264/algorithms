const SinglyLinkedListNode = require('../SinglyLinkedListNode');

test('使用值作为参数创建一个节点', () => {
  const node = new SinglyLinkedListNode(1);

  expect(node.value).toBe(1);
  expect(node.next).toBeNull();
});

test('使用对象作为参数创建一个节点', () => {
  const node = new SinglyLinkedListNode({ value: 1, key: 'test' });

  expect(node.value.value).toBe(1);
  expect(node.value.key).toBe('test');
  expect(node.next).toBeNull();
});

test('连接两个节点', () => {
  const node1 = new SinglyLinkedListNode(1);
  const node2 = new SinglyLinkedListNode(2, node1);

  expect(node1.next).toBeNull();
  expect(node2.next).not.toBeFalsy();

  expect(node2.value).toBe(2);
  expect(node2.next.value).toBe(1);
});

test('toString', () => {
  const node = new SinglyLinkedListNode(1);

  expect(node.toString()).toBe('1');

  node.value = 'string value';
  expect(node.toString()).toBe('string value');
});
