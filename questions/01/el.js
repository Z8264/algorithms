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

