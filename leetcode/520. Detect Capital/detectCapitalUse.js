const detectCapitalUse = (word) => word.substring(1).toLowerCase() === word.substring(1)
  || word.toUpperCase() === word;


module.exports = detectCapitalUse;
