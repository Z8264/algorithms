const reverse = (head, m = 0, n = 0) => {
  if (!head) return null;

  let [current, prev, next] = [head, null];

  let i = 1;
  while (i < m) {
    prev = current;
    current = current.next;
    i += 1;
  }

  const [con, tail] = [prev, current];

  while (i <= n && current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }

  if (con) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;
  return head;
};

export default reverse;
