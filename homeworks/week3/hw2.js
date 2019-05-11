function alphaSwap(str) {
  let result = '';
  for (let i = 1; i <= str.length; i += 1) {
    if (str[i - 1] <= 'z' && str[i - 1] >= 'a') {
      result += str[i - 1].toUpperCase();
    } else if (str[i - 1] <= 'Z' && str[i - 1] >= 'A') {
      result += str[i - 1].toLowerCase();
    } else {
      result += str[i - 1];
    }
  }
  return result;
}

console.log(alphaSwap(',Japan'));

module.exports = alphaSwap;
