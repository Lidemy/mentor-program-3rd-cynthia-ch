function stars(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    result.push('*'.repeat(i));
  }
  return result;
}

console.log(stars(3));

module.exports = stars;
