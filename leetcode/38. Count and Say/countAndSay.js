const countAndSay = (n) => {
  let [str, nextStr] = ['1', ''];
  let count = 0;
  for (let i = 1; i < n; i += 1) {
    for (let j = 0; j < str.length; j += 1) {
      count += 1;
      if (str[j] !== str[j + 1]) { nextStr += `${count}${str[j]}`; count = 0; }
    }

    [str, nextStr] = [nextStr, ''];
  }
  return str;
};

module.exports = countAndSay;
