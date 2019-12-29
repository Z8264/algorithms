


# 排序

* [冒泡排序 (Bubble Sort)](./bubble-sort/README.md)
* [选择排序 (Selection Sort)](./selection-sort/README.md)
* [插入排序 (Insertion Sort)](./insertion-sort/README.md)
* [归并排序 (Merge Sort)](./merge-sort/README.md)
* [快速排序 (Quick Sort)](./quick-sort/README.md)
* [希尔排序 (Shell Sort)](./shell-sort/README.md)
* [堆排序 (Heap Sort)](./heap-sort/README.md)


* [从V8引擎源码，`sort`方法的内部实现]()



| Name     |     Best      |    Average    |         Worst          | Memory | Stable | Comments |
| :------- | :-----------: | :-----------: | :--------------------: | :----: | :----: | :------- |
| 冒泡排序 |       n       | n<sup>2</sup> |     n<sup>2</sup>      |   1    |  Yes   |          |
| 选择排序 | n<sup>2</sup> | n<sup>2</sup> |     n<sup>2</sup>      |   1    |   No   |          |
| 插入排序 |       n       | n<sup>2</sup> |     n<sup>2</sup>      |   1    |  Yes   |          |
| 归并排序 |   n log(n)    |   n log(n)    |        n log(n)        |   n    |  Yes   |          |
| 快速排序 |   n log(n)    |   n log(n)    |     n<sup>2</sup>      | log(n) |   No   |          |
| 希尔排序 |   n log(n)    |       -       | n (log(n))<sup>2</sup> |   1    |   No   |          |
| 堆排序   |   n log(n)    |   n log(n)    |        n log(n)        |   1    |   No   |          |
