import playGame from '../index.js';
import mathRandom from '../helpers/math-random.js';

const rulesMessage = 'What is the result of the expression?';

const getGameData = () => {
  const operandOne = mathRandom(100);
  const operandTwo = mathRandom(10);
  const action = mathRandom(3);
  let question = '';
  let rightAnswer = 0;
  switch (action) {
    case 0:
      question = `${operandOne} + ${operandTwo}`;
      rightAnswer = operandOne + operandTwo;
      break;
    case 1:
      question = `${operandOne} - ${operandTwo}`;
      rightAnswer = operandOne - operandTwo;
      break;
    default:
      question = `${operandOne} * ${operandTwo}`;
      rightAnswer = operandOne * operandTwo;
  }
  return [question, rightAnswer];
};

export default async () => {
  await playGame(rulesMessage, getGameData);
};
