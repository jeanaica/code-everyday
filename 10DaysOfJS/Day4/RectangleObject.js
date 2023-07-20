/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  const length = a,
    width = b;

  return {
    length,
    width,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}
