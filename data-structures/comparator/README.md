# Comparator

比较函数类 Comparator

## Usage

使用默认比较函数：

``` js
const compare = new Comparator();

compare.equal(1,1); // true
compare.less(1,2); // true;
compare.greater(2,1); //true
```

使用自定义比较函数：

``` js
const compare = new Comparator((a,b)=>{
  if (a.length === b.length) return 0;
  return a.length < b.length ? -1 : 1;
});

fn.equal('a', 'b'); // true
fn.lessOrEqual('a','bb'); // true
```

## Methods

| Methods             |          |
| ------------------- | -------- |
| equal(a,b)          | 相等     |
| less(a,b)           | 小于     |
| greater(a,b)        | 大于     |
| lessOrEqual(a,b)    | 小于等于 |
| greaterOrEqual(a,b) | 大于等于 |
