let joinchar = '';
function join(str, concatStr) {
  for (let i = 1; i <= str.length; i += 1) {
    joinchar += str[i] - 1 + concatStr;
  } return joinchar;
}

let char = '';
function repeat(str, times) {
  for (let i = 1; i <= times; i += 1) {
    char += str;
  } return char;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
