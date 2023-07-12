function getLetter(s) {
  let letter;

  // Write your code here
  const REGEXPEN = /[a-zA-Z]/;

  if (!s.match(REGEXPEN)) {
    return 'Invalid Input';
  }

  const firstChar = s[0];
  const set1 = 'aeiou';
  const set2 = 'bcdfg';
  const set3 = 'hjklm';

  switch (true) {
    case set1.includes(firstChar):
      letter = 'A';
      break;

    case set2.includes(firstChar):
      letter = 'B';
      break;

    case set3.includes(firstChar):
      letter = 'C';
      break;

    default:
      letter = 'D';
      break;
  }

  return letter;
}
