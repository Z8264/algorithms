# 归并排序 (Insertion Sort)


## 图解

![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## 代码

 ```js
function sort(arr = []) {
  if (arr.length <= 1) return arr;
  const a = [];

  const i = Math.floor(arr.length / 2);
  const [left, right] = [sort(arr.slice(0, i)), sort(arr.slice(i))];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      a.push(left.shift());
    } else {
      a.push(right.shift());
    }
  }

  return a.concat(left, right);
}
 ```

## 时间复杂度 (Time Complexity)

## 空间复杂度 (Space Complexity)

## 稳定性

