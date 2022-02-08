# Linked List

**Contents**

1.  **Middle** - The middle node
2.  **Swap** - Swap every two adjacent nodes
3.  **Cycle** - The node where the cycle begins
4.  **Remove** - Remove the nth node from the end of the list
5.  **Reverse** - Reverse a list from position m to n
6.  **Sort** - Sort in ascending order
7.  **Partition** - All nodes less than x come before nodes greater than or equal to x
8.  **Intersection** - The intersection of two linked lists begins
9.  **Palindrome** - Palindrome judgment
10. **Copy** - Each node contains an additional random pointer


**Node**

``` javascript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
```
## 01. Middle

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example:

```
Input: head = 1->2->3->4->5
Output: head = 3->4->5
```

Example:

```
Input: head = 1->2->3->4
Output: head = 3->4
```

Solution:

``` javascript
const middle = (head) => {
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

## 02. Swap

Given a linked list, swap every two adjacent nodes and return its head.

Example:

```
Input: head = 1->2->3->4
Output: head = 2->1->4->3
```

Example:

```
Input: head = 1->2->3
Output: head = 2->1->3
```

Solution:

``` javascript
const swap = (head) => {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }
  return dummyHead.next;
};
```
## 03. Cycle

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Example: Tail connects to the second node.

```
Input: head = 1->2->3->4, [4->2]
Output: head = 2->3->4
```

Example: No cycle

```
Input: head = 1->2
Output: null
```

Solution

``` javascript
const cycle = (head) => {
  if (!head || !head.next) return null;
  let [l1, l2] = [head, head];

  while (l2 && l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
    if (l1 === l2) break;
  }

  if (l1 !== l2) return null;

  let current = head;
  while (current !== l1) {
    current = current.next;
    l1 = l1.next;
  }
  return current;
};
```

## 04. Remove

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example: 

```
Input: head = 1->2->3->4->5, n = 2
Output: head = 1->2->3->5
```

Solution:

``` javascript
const remove = (head, n) => {
  let [slow, fast] = [head, head];
  let i = 0;
  while (fast && i < n) {
    fast = fast.next;
    i += 1;
  }

  if (!fast) return head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
```

## 05. Reverse

Reverse a linked list from position m to n.

Example:

```
Input: head = 1->2->3->4->5, m = 2, n = 4
Output: head = 1->4->3->2->5
```

Solution:

``` javascript
const reverse = (head, m = 0, n = 0) => {
  if (!head) return null;

  let [current, prev, next] = [head, null];

  let i = 1;
  while (i < m) {
    prev = current;
    current = current.next;
    i += 1;
  }

  const [con, tail] = [prev, current];

  while (i <= n && current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }

  if (con) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;
  return head;
};
```

## 06. Sort

Given the head of a linked list, return the list after sorting it in ascending order.

Time: O(n logn)
Memory: O(1)

Example:

```
Input: head = 4->2->1->3
Output: head = 1->2->3->4
```

Solution:

``` javascript

const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead; let temp1 = head1; let
    temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
};
const sort = (head) => {
  if (head === null) {
    return head;
  }
  let length = 0;
  let node = head;
  while (node !== null) {
    length += 1;
    node = node.next;
  }
  const dummyHead = new ListNode(0, head);

  for (let subLength = 1; subLength < length; subLength *= 2) {
    let prev = dummyHead; let
      curr = dummyHead.next;
    while (curr !== null) {
      const head1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i += 1) {
        curr = curr.next;
      }
      const head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i += 1) {
        curr = curr.next;
      }
      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next !== null) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
};
```

## 07. Partition

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

```
Input: head = 1->4->3->2->5->2, x = 3
Output: head = 1->2->2->4->3->5
```

Solution:

``` javascript
const partition = (head, x) => {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};
```


## 08. Intersection

Find the node at which the intersection of two linked lists begins.

Example:

```
Input: head = 1->2->3->[4->5], head = 7->8->[4->5],
Output: head = 4->5
```

Solution:

``` javascript
const intersection = (headA, headB) => {
  let [l1, l2] = [headA, headB];
  while (l1 !== l2) {
    l1 = l1 ? l1.next : headB;
    l2 = l2 ? l2.next : headA;
  }

  return l1;
};
```
## 09. Palindrome

Determine if a singly linked list is a palindrome.

Example:

```
Input: head = 1->2
Output: false
```

Example:

```
Input: head = 1->2->2->1
Output: true
```

Solution:

``` javascript
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const palindrome = (head) => {
  if (head == null) return true;

  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
    if (p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};
```

## 10. Copy

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.


``` javascript
class ListNode {
  constructor(val, next = null,random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}
```

Example:

```
Input: head = [1,1]->[2,null]->[3,2]
Output: (clone)
```

Solution:

``` javascript
const copy = (head) => {
  if (!head) return null;
  const m = new Map();
  let node = head;
  while (node) {
    m.set(node, new ListNode(node.val));
    node = node.next;
  }
  node = head;
  while (node) {
    m.get(node).next = node.next ? m.get(node.next) : null;
    m.get(node).random = node.random ? m.get(node.random) : null;
    node = node.next;
  }
  return m.get(head);
};
```
