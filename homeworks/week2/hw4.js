function printFactor(n) {
  let char = '';
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      char += i;
    }
  } return (char);
}

console.log(printFactor(7));
