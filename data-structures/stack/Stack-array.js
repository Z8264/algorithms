class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
    return this;
  }

  toArray() {
    return [...this.items];
  }

  toString() {
    return this.items.toString();
  }
}

module.exports = Stack;
