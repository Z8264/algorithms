const getIntersectionNode = (headA, headB) => {
  let [l1, l2] = [headA, headB];
  while (l1 !== l2) {
    l1 = l1 ? l1.next : headB;
    l2 = l2 ? l2.next : headA;
  }

  return l1;
};

module.exports = getIntersectionNode;
