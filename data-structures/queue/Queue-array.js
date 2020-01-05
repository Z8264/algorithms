class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  shift() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
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
