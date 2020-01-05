const CircularLinkedListNode = require('./CircularLinkedListNode');

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * unshift
   * @param {*} value
   */
  unshift(value) {
    const node = new CircularLinkedListNode(value);

    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    return node;
  }

  /**
   * shift
   */
  shift() {
    if (!this.head) return null;

    const node = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    return node;
  }

  /**
   * push
   * @param {*} value
   */
  push(value) {
    const node = new CircularLinkedListNode(value);

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.tail.next = this.head;
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
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
    return node;
  }

  /**
   * reverse
   */
  reverse() {
    if (!this.head) return this;
    let node = this.head;
    while (node !== this.tail) {
      [node.prev, node.next] = [node.next, node.prev];
      node = node.prev;
    }
    [node.prev, node.next] = [node.next, node.prev];


    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  /**
   * toArray
   */
  toArray() {
    if (!this.head) return [];

    const nodes = [];
    let node = this.head;

    while (node !== this.tail) {
      nodes.push(node.value);
      node = node.next;
    }

    nodes.push(node.value);

    return nodes;
  }

  /**
   * toString
   */
  toString() {
    return this.toArray().map((node) => node.toString()).toString();
  }
}

module.exports = CircularLinkedList;
