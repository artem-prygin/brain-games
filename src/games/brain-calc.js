import playGame, { roundsCount } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const operandOne = generateRandomNumber(1, 100);
  const operandTwo = generateRandomNumber(1, 10);
  const operationsLength = Object.keys(operations).length;
  const randomOperationIndex = generateRandomNumber(0, operationsLength - 1);
  const [operator, calculate] = Object.entries(operations)[randomOperationIndex];
  const question = `${operandOne} ${operator} ${operandTwo}`;
  const rightAnswer = calculate(operandOne, operandTwo);
  return [question, rightAnswer.toString()];
};

export default () => playGame(rulesMessage, Array.from({ length: roundsCount }, generateRound));
