function reverseStr(str) {
  let char = '';
  for (let i = 1; i <= str.length; i += 1) {
    char += str[str.length - i];
  } return char;
}

console.log(reverseStr('1,2,3,'));
