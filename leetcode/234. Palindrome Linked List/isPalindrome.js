const isPalindrome = (head) => {
  const arr = [];

  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  let [left, right] = [0, arr.length - 1];
  while (left < arr.length / 2) {
    if (arr[left] !== arr[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
};
module.exports = isPalindrome;
