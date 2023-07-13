function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  let consonants = [];

  [...s].forEach((char) => {
    if (vowels.includes(char)) {
      console.log(char);
    } else {
      consonants.push(char);
    }
  });

  consonants.forEach((char) => console.log(char));

  return;
}
