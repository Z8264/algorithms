
## 001

### QUESTION

Input：

``` javascript
const el = require('./element.js')；
const ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])
const ulRoot = ul.render();
document.body.appendChild(ulRoot);
```

Output:

``` html
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>
```

Implement element.js
### ANSWER

``` javascript
class El {
  constructor(tag, props, children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  render() {
    const el = document.createElement(this.tag);
    Object.entries(this.props).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
    this.children.forEach((child) => {
      const node = (child instanceof El) ? child.render() : document.createTextNode(child);
      el.appendChild(node);
    });
    return el;
  }
}
module.exports = (...params) => new El(...params);
```


## 002

