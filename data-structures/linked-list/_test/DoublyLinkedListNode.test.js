const DoublyLinkedListNode = require('../DoublyLinkedListNode');

test('使用值作为参数创建一个节点', () => {
  const node = new DoublyLinkedListNode(1);

  expect(node.value).toBe(1);
  expect(node.prev).toBeNull();
  expect(node.next).toBeNull();
});

test('使用对象作为参数创建一个节点', () => {
  const node = new DoublyLinkedListNode({ value: 1, key: 'test' });

  expect(node.value.value).toBe(1);
  expect(node.value.key).toBe('test');
  expect(node.prev).toBeNull();
  expect(node.next).toBeNull();
});

test('连接两个节点', () => {
  const node2 = new DoublyLinkedListNode(2);
  const node1 = new DoublyLinkedListNode(1, null, node2);
  const node3 = new DoublyLinkedListNode(10, node2, node1);

  expect(node1.next).toBeDefined();
  expect(node1.prev).toBeNull();
  expect(node2.next).toBeNull();
  expect(node2.prev).toBeNull();
  expect(node3.next).toBeDefined();
  expect(node3.prev).toBeDefined();
  expect(node1.value).toBe(1);
  expect(node1.next.value).toBe(2);
  expect(node3.next.value).toBe(1);
  expect(node3.prev.value).toBe(2);
});

test('toString', () => {
  const node = new DoublyLinkedListNode(1);
  expect(node.toString()).toBe('1');

  node.value = 'string value';
  expect(node.toString()).toBe('string value');
});
