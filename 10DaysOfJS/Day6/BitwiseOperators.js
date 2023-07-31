function getMaxLessThanK(n, k) {
  let maxBitwiseValue = 0;

  for (let i = k - 1; i > 0; i--) {
    for (let j = i + 1; j <= n; j++) {
      let bitwiseValue = i & j;
      if (bitwiseValue < k && bitwiseValue > maxBitwiseValue) {
        maxBitwiseValue = bitwiseValue;
      }
      if (maxBitwiseValue === k - 1) {
        return maxBitwiseValue;
      }
    }
  }
  return maxBitwiseValue;
}
