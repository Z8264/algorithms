class Stack {
  constructor() {
    this.items = {};
    this.max = 0;
    this.min = 0;
  }

  push(value) {
    this.items[this.max] = value;
    this.max += 1;
  }

  shift() {
    if (this.max === this.min) return undefined;

    const res = this.items[this.min];
    delete this.items[this.min];
    this.min -= 1;

    return res;
  }


  peek() {
    if (this.max === this.min) return undefined;

    return this.items[this.min];
  }

  isEmpty() {
    return this.max === this.min;
  }

  size() {
    return this.max - this.min;
  }

  clear() {
    this.items = {};
    this.max = 0;
    this.min = 0;
  }

  toArray() {
    const arr = [];
    for (let i = this.min; i < this.max; i += 1) {
      arr.push(this.items[i]);
    }
    return arr;
  }

  toString() {
    return this.toArray().toString();
  }
}

module.exports = Stack;
