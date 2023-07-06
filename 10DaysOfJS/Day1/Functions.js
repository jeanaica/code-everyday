function factorial(num) {
  let n = num;
  if (num < 0 && num > 10) {
    return 'Invalid input';
  }

  for (let i = 1; i < num; i++) {
    n = n * i;
  }

  return n;
}
