/**
 * Heap Sort
 * 堆排序
 */

class MinHeap {
  constructor() {
    this.heapContainer = [];
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();

    return this;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      Math.floor((currentIndex - 1) / 2) >= 0
      && this.heapContainer[Math.floor((currentIndex - 1) / 2)] >= this.heapContainer[currentIndex]
    ) {
      [
        this.heapContainer[currentIndex],
        this.heapContainer[Math.floor((currentIndex - 1) / 2)],
      ] = [
        this.heapContainer[Math.floor((currentIndex - 1) / 2)],
        this.heapContainer[currentIndex],
      ];
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  poll() {
    if (this.heapContainer.length === 0) return null;
    if (this.heapContainer.length === 1) return this.heapContainer.pop();

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }


  hasLeftChild(parentIndex) {
    return (2 * parentIndex) + 1 < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return (2 * parentIndex) + 2 < this.heapContainer.length;
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
          && this.heapContainer[2 * currentIndex + 2] < this.heapContainer[2 * currentIndex + 1]
      ) {
        nextIndex = 2 * currentIndex + 2;
      } else {
        nextIndex = 2 * currentIndex + 1;
      }

      if (this.heapContainer[currentIndex] < this.heapContainer[nextIndex]) {
        break;
      }

      [
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      ] = [
        this.heapContainer[nextIndex],
        this.heapContainer[currentIndex],
      ];

      currentIndex = nextIndex;
    }
  }
}

function sort(arr = []) {
  const a = [];

  const minHeap = new MinHeap();

  arr.forEach((el) => {
    minHeap.add(el);
  });

  while (!minHeap.isEmpty()) {
    a.push(minHeap.poll());
  }

  return a;
}
module.exports = sort;
