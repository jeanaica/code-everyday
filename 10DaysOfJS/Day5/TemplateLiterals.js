/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [sub1, sub2] = expressions;
  const rootTerm = Math.sqrt(sub2 ** 2 - 16 * sub1);

  const extractS1 = (sub2 + rootTerm) / 4;
  const extractS2 = (sub2 - rootTerm) / 4;

  return [extractS1, extractS2].sort();
}
