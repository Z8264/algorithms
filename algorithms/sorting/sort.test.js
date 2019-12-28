
const bubbleSort = require('./bubble-sort');
const selectionSort = require('./selection-sort');
const insetSort = require('./insertion-sort');
const quickSort = require('./quick-sort');
const mergeSort = require('./merge-sort');
const shellSort = require('./shell-sort');
const heapSort = require('./heap-sort');

const sorters = {
  bubbleSort,
  selectionSort,
  insetSort,
  quickSort,
  mergeSort,
  shellSort,
  heapSort,
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const randomArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const befortSortArr = [...randomArr];

Object.keys(sorters).forEach((key) => {
  test(`${key} test`, () => {
    expect(sorters[key]([])).toEqual([]);
    expect(sorters[key]([1])).toEqual([1]);
    expect(sorters[key]([1, 2])).toEqual([1, 2]);
    expect(sorters[key]([2, 1])).toEqual([1, 2]);
    expect(sorters[key]([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(sorters[key](sortedArr)).toEqual(sortedArr);
    expect(sorters[key](reverseArr)).toEqual(sortedArr);
    expect(sorters[key](randomArr)).toEqual(sortedArr);
    expect(sorters[key](equalArr)).toEqual(equalArr);

    // 确保初始数组不被改变
    expect(randomArr).toEqual(befortSortArr);
  });
});
