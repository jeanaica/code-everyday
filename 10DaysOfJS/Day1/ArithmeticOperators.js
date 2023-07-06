/**
 *  Check Constraints
 *    1 <= length/width
 *    length/width <= 1000
 *
 **/
function convertNumber(value) {
  const num = Number(value);

  if (num < 1 || num > 1000) {
    return 'Invalid input';
  }

  return parseFloat(value.toFixed(3));
}

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;

  const l = convertNumber(length);
  const w = convertNumber(width);

  if (typeof l === 'string' || typeof w === 'string') {
    return 'Invalid input';
  }

  // Write your code here
  area = l * w;
  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;

  const l = convertNumber(length);
  const w = convertNumber(width);

  if (typeof l === 'string' || typeof w === 'string') {
    return 'Invalid input';
  }
  // Write your code here
  perimeter = 2 * (l + w);

  return perimeter;
}
