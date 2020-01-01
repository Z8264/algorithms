class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get leftHeight() {
    if (!this.left) return 0;
    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) return 0;
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  setValue(value) {
    this.value = value;
    return this;
  }
}


module.exports = Node;
