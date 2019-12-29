class Comparator {
  constructor(fn) {
    this.compare = fn || Comparator.defaultFn;
  }

  static defaultFn(a, b) {
    // eslint-disable-next-line no-nested-ternary
    return a === b ? 0 : (a < b ? -1 : 1);
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  less(a, b) {
    return this.compare(a, b) < 0;
  }

  greater(a, b) {
    return this.compare(a, b) > 0;
  }

  lessOrEqual(a, b) {
    return this.compare(a, b) <= 0;
  }

  greaterOrEqual(a, b) {
    return this.compare(a, b) >= 0;
  }
}
module.exports = Comparator;
