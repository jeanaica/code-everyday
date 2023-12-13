const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

function weatherMachineInterpreter() {
  const numberPattern = new RegExp(/(\d)/g);
  let calibrationValue = 0;

  lines.forEach((line) => {
    const digits = line.match(numberPattern);

    switch (true) {
      case digits?.length === 2:
        calibrationValue += Number(`${digits[0]}${digits[1]}`);
        break;

      case digits?.length > 2:
        calibrationValue += Number(`${digits[0]}${digits[digits?.length - 1]}`);
        break;

      case digits?.length < 2:
        calibrationValue += Number(`${digits[0]}${digits[0]}`);
        break;

      default:
        console.log('No match found in:', line);
        return;
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
