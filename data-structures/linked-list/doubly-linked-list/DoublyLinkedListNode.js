class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return this.value.toString();
  }
}

module.exports = DoublyLinkedListNode;
