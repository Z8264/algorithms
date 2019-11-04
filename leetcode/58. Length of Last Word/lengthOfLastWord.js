const lengthOfLastWord = (s) => {
  const arr = s.trim().split(' ');
  return arr.length ? arr[arr.length - 1].length : 0;
};

module.exports = lengthOfLastWord;
