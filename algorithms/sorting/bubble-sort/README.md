# 冒泡排序 (Bubble Sort)

冒泡排序，通过反复遍历需要排序的元素，比较每对相邻项，并按照升序或降序交换。每次遍历可以确定一个最大或最小的元素，则下次遍历不需要在比较这个元素。如果一次遍历中没有发生交换，则不需要继续遍历。

## 图解

![](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## 代码

 ```js
function sort(arr = []) {
  const a = [...arr];
  let swapped = false;
  for (let i = 1; i < a.length; i += 1) {
    for (let j = 0; j < a.length - i; j += 1) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) return a;
  }
  return a;
}
 ```

## 时间复杂度 (Time Complexity)

使用 $C$ 表示比较次数，$M$表示移动次数

最好情况下：
$$
C_{min}=n-1
$$

$$
M_{min}=0
$$

此时时间复杂度为 $O(n)$。

最坏情况下 ：

$$
C_{max}=\frac{n(n-1)}{2}=O(n^2)
$$

$$
M_{max}=\frac{3n(n-1)}{2}=O(n^2)
$$

此时时间复杂度为 $O(n^2)$。

平均时间复杂度为 $O(n^2)$。

## 空间复杂度 (Space Complexity)

O(1)

## 稳定性

由于两个元素相等不会被交换顺序，所以，冒泡排序是稳定排序。