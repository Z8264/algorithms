class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(value) {
    this.items[this.count] = value;
    this.count += 1;
  }

  pop() {
    if (!this.count) return undefined;

    this.count -= 1;
    const res = this.items[this.count];
    delete this.items[this.count];

    return res;
  }


  peek() {
    if (!this.count) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return !this.count;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toArray() {
    const arr = [];
    for (let i = 0; i < this.count; i += 1) {
      arr.push(this.items[i]);
    }
    return arr;
  }

  toString() {
    return this.toArray().toString();
  }
}

module.exports = Stack;
