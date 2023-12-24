const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
const ballLimit = {
  red: 12,
  green: 13,
  blue: 14,
};
let gameIdSum = 0;

function getId(entry) {
  const match = entry.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function validateDraw(draw) {
  const round = draw.map((r) => {
    const balls = r.match(/(\d+) (green|red|blue)/);

    return Number(balls[1]) <= ballLimit[balls[2]] ? 'PASS' : 'FAIL';
  });

  return !round.includes('FAIL');
}

function gameValidator() {
  lines.forEach((line) => {
    const gameSessions = line.split(';');

    const filteredGameSessions = gameSessions.filter((game) => {
      const draw = game.split(',') ?? [];

      return validateDraw(draw);
    });

    if (gameSessions.length === filteredGameSessions.length) {
      gameIdSum += getId(line);
    }
  });

  console.log('GAME SUM: ', gameIdSum);
}

function readLines() {
  rl.question('', (line) => {
    if (line === '') {
      rl.close();
      gameValidator();
    } else {
      lines.push(line);
      readLines();
    }
  });
}

console.log('Enter your input (leave an empty line to finish):');
readLines();
