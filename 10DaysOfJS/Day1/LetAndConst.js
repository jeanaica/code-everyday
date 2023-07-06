function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let area, perimeter;
  let r = readLine();

  // Implement constraints
  if (r < 0 && r > 100) {
    return 'Invalid input';
  }

  // To make r a floating-point number with up to 3 decimal places
  r = parseFloat(Number(r).toFixed(3));

  // Print the area of the circle:
  area = PI * (r * r);

  // Print the perimeter of the circle:
  perimeter = 2 * (PI * r);

  // log output
  console.log(area);
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
