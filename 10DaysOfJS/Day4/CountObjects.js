/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  if (objects.length < 5 && objects.length > 10) {
    return 'Invalid Input';
  }

  let count = 0;

  objects.forEach((obj) => {
    if (obj.x < 1 && obj.x > 100 && obj.y < 1 && obj.y > 100) {
      return 'Invalid Input';
    }

    if (obj.x === obj.y) {
      count += 1;
    }
  });

  return count;
}

const arr = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

console.log(getCount(arr));
