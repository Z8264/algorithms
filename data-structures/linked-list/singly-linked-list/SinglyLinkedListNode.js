class SinglyLinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value.toString();
  }
}

module.exports = SinglyLinkedListNode;
