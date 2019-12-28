# 选择排序 (Selection Sort)

选择排序，每次遍历，从待排序的数据中选出最小或最大的元素，并从序列的起始位置依次存放，直到不存在待排序的数据。

## 图解

![](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

## 代码

``` js
function sort(arr = []) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}
```

## 时间复杂度 (Time Complexity)

使用 $C$ 表示比较次数，$M$表示移动次数

最好情况下：
$$
C_{min}=\frac{n(n-1)}{2}=O(n^2)
$$

$$
M_{min}=0
$$

此时时间复杂度为 $O(n^2)$。

最坏情况下 ：

$$
C_{max}=\frac{n(n-1)}{2}=O(n^2)
$$

$$
M_{max}=n-1=O(n)
$$

此时时间复杂度为 $O(n^2)$。

平均时间复杂度为 $O(n^2)$。

## 空间复杂度 (Space Complexity)

$O(1)$

## 稳定性 (Stability)

举个例子，[3, 2, 3, 1, 9]，第一遍选择 3 和 1 交换，那么原序列中两个 3 的相对前后顺序就被破坏了，所以选择排序是一个不稳定的排序算法。