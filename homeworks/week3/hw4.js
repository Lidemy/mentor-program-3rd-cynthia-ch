function isPalindromes(str) {
  let result = '';
  for (let i = 1; i <= str.length; i += 1) {
    result += str[str.length - i];
  }
  if (result === str) {
    return true;
  }
  return false;
}

console.log(isPalindromes('applppa'));

module.exports = isPalindromes;
