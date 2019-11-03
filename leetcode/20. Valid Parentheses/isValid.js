const isValid = (s) => {
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (hash[s[i]]) stack.push(s[i]);
    else if (s[i] === hash[stack[stack.length - 1]]) stack.pop();
    else return false;
  }

  return !stack.length;
};

module.exports = isValid;
