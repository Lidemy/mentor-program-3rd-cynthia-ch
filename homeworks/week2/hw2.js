let char = '';
function capFirstStr(str) {
  if (str[0] >= 'A' && str[0] <= 'Z') {
    return str;
  } if (str[0] >= 'a' && str[0] <= 'z') {
    char = str[0].toUpperCase();
    for (let i = 1; i <= str.length - 1; i += 1) {
      char += str[i];
    }
    return char;
  } return str;
}
console.log(capFirstStr(',welcome'));
