const LinkedList = require('./SinglyLinkedList');


test('push', () => {
  const linkedList = new LinkedList();
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();

  linkedList.push(1);
  linkedList.push(2);

  expect(linkedList.toString()).toBe('1,2');
  expect(linkedList.tail.next).toBeNull();
});

test('pop', () => {
  const linkedList = new LinkedList();

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

  const deletedNode3 = linkedList.pop();

  expect(deletedNode3.value).toBe(1);
  expect(linkedList.toString()).toBe('');
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('unshift', () => {
  const linkedList = new LinkedList();

  linkedList.unshift(2);
  expect(linkedList.head.toString()).toBe('2');
  expect(linkedList.tail.toString()).toBe('2');

  linkedList.push(1);
  linkedList.unshift(3);

  expect(linkedList.toString()).toBe('3,2,1');
});

test('shift', () => {
  const linkedList = new LinkedList();

  expect(linkedList.shift()).toBeNull();

  linkedList.push(1);
  linkedList.push(2);

  expect(linkedList.head.toString()).toBe('1');
  expect(linkedList.tail.toString()).toBe('2');

  const deletedNode1 = linkedList.shift();

  expect(deletedNode1.value).toBe(1);
  expect(linkedList.toString()).toBe('2');
  expect(linkedList.head.toString()).toBe('2');
  expect(linkedList.tail.toString()).toBe('2');

  const deletedNode2 = linkedList.shift();

  expect(deletedNode2.value).toBe(2);
  expect(linkedList.toString()).toBe('');
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('reverse', () => {
  const linkedList = new LinkedList();
  linkedList
    .push(1)
    .push(2)
    .push(3);

  expect(linkedList.toString()).toBe('1,2,3');
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.tail.value).toBe(3);

  linkedList.reverse();
  expect(linkedList.toString()).toBe('3,2,1');
  expect(linkedList.head.value).toBe(3);
  expect(linkedList.tail.value).toBe(1);

  linkedList.reverse();
  expect(linkedList.toString()).toBe('1,2,3');
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.tail.value).toBe(3);
});
