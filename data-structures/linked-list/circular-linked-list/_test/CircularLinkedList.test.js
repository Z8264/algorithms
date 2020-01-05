const CircularLinkedList = require('../CircularLinkedList');

test('unshift', () => {
  const linkedList = new CircularLinkedList();

  linkedList.unshift(2);
  expect(linkedList.head.toString()).toBe('2');
  expect(linkedList.tail.toString()).toBe('2');
  expect(linkedList.head.prev.toString()).toBe('2');
  expect(linkedList.tail.next.toString()).toBe('2');

  linkedList.push(1);
  linkedList.unshift(3);

  expect(linkedList.head.next.next.prev).toBe(linkedList.head.next);
  expect(linkedList.tail.prev.next).toBe(linkedList.tail);
  expect(linkedList.tail.prev.value).toBe(2);
  expect(linkedList.tail.next).toBe(linkedList.head);
  expect(linkedList.head.prev).toBe(linkedList.tail);
  expect(linkedList.toString()).toBe('3,2,1');
});

test('shift', () => {
  const linkedList = new CircularLinkedList();

  expect(linkedList.shift()).toBeNull();

  linkedList.push(1);
  linkedList.push(2);

  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('2');

  const deletedNode1 = linkedList.shift();

  expect(deletedNode1.value).toBe(1);
  expect(linkedList.head.prev).toBe(linkedList.tail);
  expect(linkedList.toString()).toBe('2');
  expect(linkedList.head.toString()).toBe('2');
  expect(linkedList.tail.toString()).toBe('2');

  const deletedNode2 = linkedList.shift();

  expect(deletedNode2.value).toBe(2);
  expect(linkedList.toString()).toBe('');
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});


test('push', () => {
  const linkedList = new CircularLinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();

  linkedList.push(1);

  expect(linkedList.head).toBe(linkedList.tail);
  expect(linkedList.head.prev).toBe(linkedList.tail);
  expect(linkedList.tail.next).toBe(linkedList.head);

  linkedList.push(2);

  expect(linkedList.head.prev.value).toBe(2);
  expect(linkedList.head.next.value).toBe(2);
  expect(linkedList.tail.prev.value).toBe(1);
  expect(linkedList.tail.next.value).toBe(1);
  expect(linkedList.tail.next).toBe(linkedList.head);
  expect(linkedList.head.prev).toBe(linkedList.tail);

  expect(linkedList.toString()).toBe('1,2');
});

test('pop', () => {
  const linkedList = new CircularLinkedList();

  expect(linkedList.pop()).toBeNull();

  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);

  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('3');

  const deletedNode1 = linkedList.pop();

  expect(deletedNode1.value).toBe(3);
  expect(linkedList.toString()).toBe('1,2');
  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('2');

  const deletedNode2 = linkedList.pop();

  expect(deletedNode2.value).toBe(2);
  expect(linkedList.toString()).toBe('1');
  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('1');
  expect(linkedList.tail.next).toBe(linkedList.head);
  expect(linkedList.head.prev).toBe(linkedList.tail);

  const deletedNode3 = linkedList.pop();

  expect(deletedNode3.value).toBe(1);
  expect(linkedList.toString()).toBe('');
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});


test('reverse', () => {
  const linkedList = new CircularLinkedList();

  // Add test values to linked list.
  linkedList
    .push(1)
    .push(2)
    .push(3)
    .push(4);

  expect(linkedList.toString()).toBe('1,2,3,4');
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.tail.value).toBe(4);

  linkedList.reverse();

  expect(linkedList.toString()).toBe('4,3,2,1');

  expect(linkedList.head.prev).toBe(linkedList.tail);
  expect(linkedList.head.value).toBe(4);
  expect(linkedList.head.next.value).toBe(3);
  expect(linkedList.head.next.next.value).toBe(2);
  expect(linkedList.head.next.next.next.value).toBe(1);

  expect(linkedList.tail.next).toBe(linkedList.head);
  expect(linkedList.tail.value).toBe(1);
  expect(linkedList.tail.prev.value).toBe(2);
  expect(linkedList.tail.prev.prev.value).toBe(3);
  expect(linkedList.tail.prev.prev.prev.value).toBe(4);

  linkedList.reverse();

  expect(linkedList.toString()).toBe('1,2,3,4');

  expect(linkedList.head.prev).toBe(linkedList.tail);
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.head.next.value).toBe(2);
  expect(linkedList.head.next.next.value).toBe(3);
  expect(linkedList.head.next.next.next.value).toBe(4);

  expect(linkedList.tail.next).toBe(linkedList.head);
  expect(linkedList.tail.value).toBe(4);
  expect(linkedList.tail.prev.value).toBe(3);
  expect(linkedList.tail.prev.prev.value).toBe(2);
  expect(linkedList.tail.prev.prev.prev.value).toBe(1);
});
