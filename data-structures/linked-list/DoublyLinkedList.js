const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * unshift
   * @param {*} value
   */
  unshift(value) {
    const node = new DoublyLinkedListNode(value, null, this.head);

    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }

    this.head = node;

    return this;
  }

  /**
   * shift
   * @param {*} value
   */
  shift() {
    if (!this.head) return null;

    const node = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  /**
   * push
   * @param {DoublyLinkedListNode} value
   */
  push(value) {
    const node = new DoublyLinkedListNode(value);

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    return this;
  }

  /**
   * pop
   */
  pop() {
    if (!this.tail) return null;

    const node = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return node;
  }

  /**
   * reverse
   */
  reverse() {
    let current = this.head;
    while (current) {
      [current.prev, current.next] = [current.next, current.prev];
      current = current.prev;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  /**
   * toArray
   */
  toArray() {
    const nodes = [];
    let node = this.head;
    while (node) {
      nodes.push(node.value);
      node = node.next;
    }
    return nodes;
  }

  /**
   * toString
   * @param {function} cb
   */
  toString(cb) {
    return this.toArray().map((node) => node.toString(cb)).toString();
  }
}

module.exports = DoublyLinkedList;
