/**
 * I: 1
 * V: 5
 * X: 10
 * L: 50
 * C: 100
 * D: 500
 * M: 1000
 * @param {*} num
 */
const intToRoman = (num) => {
  const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const thousands = ['', 'M', 'MM', 'MMM'];

  let str = '';
  if (num >= 1000) {
    str += thousands[parseInt(num / 1000, 10)];
  }
  if (num >= 100) {
    str += hundreds[parseInt(num / 100, 10) % 10];
  }
  if (num >= 10) {
    str += tens[parseInt(num / 10, 10) % 10];
  }
  str += units[num % 10];
  return str;
};

module.exports = intToRoman;
