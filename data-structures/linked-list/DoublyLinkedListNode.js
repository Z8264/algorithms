class DoublyLinkedListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  toString(cb) {
    return cb ? cb(this.value) : this.value.toString();
  }
}

module.exports = DoublyLinkedListNode;
