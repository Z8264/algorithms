const LinkedListNode = require('./LinkedListNode');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * unshift
   * @param {LinkedListNode} value
   */
  unshift(value) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  /**
   * shift
   */
  shift() {
    if (!this.head) return null;

    const node = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  /**
   * push
   * @param {LinkedListNode} value
   */
  push(value) {
    const node = new LinkedListNode(value);

    if (this.head) {
      this.tail.next = node;
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
    const node = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return node;
    }

    let current = this.head;

    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;

    return node;
  }

  /**
   * reverse
   */
  reverse() {
    let curr = this.head;
    let [prev, next] = [null, null];
    while (curr) {
      next = curr.next;
      curr.next = prev;

      [prev, curr] = [curr, next];
    }
    this.tail = this.head;
    this.head = prev;

    return this;
  }

  /**
   * toArray
   */
  toArray() {
    const nodes = [];
    let node = this.head;
    while (node) {
      nodes.push(node);
      node = node.next;
    }
    return nodes;
  }

  /**
   * toString
   * @param {fn} cb
   */
  toString(cb) {
    return this.toArray().map((node) => node.toString(cb)).toString();
  }
}

module.exports = LinkedList;
