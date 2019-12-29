const LinkedListNode = require('./LinkedListNode');

test('使用值作为参数创建一个节点', () => {
  const node = new LinkedListNode(1);

  expect(node.value).toBe(1);
  expect(node.next).toBe(null);
});

test('使用对象作为参数创建一个节点', () => {
  const node = new LinkedListNode({ value: 1, key: 'test' });

  expect(node.value.value).toBe(1);
  expect(node.value.key).toBe('test');
  expect(node.next).toBe(null);
});

test('连接两个节点', () => {
  const node1 = new LinkedListNode(1);
  const node2 = new LinkedListNode(2, node1);

  expect(node1.next).toBeNull();
  expect(node2.next).not.toBeFalsy();

  expect(node2.value).toBe(2);
  expect(node2.next.value).toBe(1);
});

test('toString', () => {
  const node = new LinkedListNode(1);

  expect(node.toString()).toBe('1');

  node.value = 'string value';
  expect(node.toString()).toBe('string value');
});
