const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
const wordPattern = new RegExp(
  /(?:one|two|three|four|five|six|seven|eight|nine|\d)/g
);

const numberWords = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function wordToNumValue(inputString) {
  let wordNum = [];
  let match;

  while ((match = wordPattern.exec(inputString)) !== null) {
    if (numberWords[match[0]]) {
      wordNum.push(numberWords[match[0]]);
    } else {
      wordNum.push(match[0]);
    }

    wordPattern.lastIndex = match.index + 1;
  }

  return wordNum.toString().replaceAll(',', '');
}

function weatherMachineInterpreter() {
  let calibrationValue = 0;

  lines.forEach((line) => {
    const evalNum = wordToNumValue(line);

    switch (true) {
      case evalNum?.length >= 2:
        calibrationValue += Number(
          `${evalNum[0]}${evalNum[evalNum?.length - 1]}`
        );
        break;

      case evalNum.length === 1:
        calibrationValue += Number(`${evalNum[0]}${evalNum[0]}`);
        break;

      default:
        console.log('No match found in:', line);
        break;
    }
  });

  if (calibrationValue) {
    console.log('Calibration Value:', calibrationValue);
  }
}

function readLines() {
  rl.question('', (line) => {
    if (line === '') {
      rl.close();
      weatherMachineInterpreter();
    } else {
      lines.push(line);
      readLines();
    }
  });
}

console.log('Enter your input (leave an empty line to finish):');
readLines();
