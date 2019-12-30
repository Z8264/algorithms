# 链表 (Linked List)


* 单向链表 (Singly Linked List)
* 双向链表 (Doubly Linked List)


## SinglyLinkedListNode

``` js
class SinglyLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
```

## DoublyLinkedListNode 

``` js
class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
```

## 属性


| 属性 |        |
| ---- | ------ |
| head | 头节点 |
| tail | 尾节点 |

``` js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

``` js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

## 方法

| Methods  |                    |
| -------- | ------------------ |
| push     | 在末尾位置添加节点 |
| pop      | 删除并返回尾节点   |
| unshift  | 在开始位置添加节点 |
| shift    | 删除并返回头节点   |
| reverse  | 反转链表           |
| toArray  | 转换为数组         |
| toString | 转换为字符串       |
