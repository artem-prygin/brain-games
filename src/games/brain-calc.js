import playGame from '../index.js';
import generateGameDataForAllRounds from '../generate-game-data.js';
import { getRandomNumber } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

const calculateData = (operandOne, operandTwo) => {
  const operations = {
    '+': operandOne + operandTwo,
    '-': operandOne - operandTwo,
    '*': operandOne * operandTwo,
  };
  const operationsLength = Object.keys(operations).length;
  const randomOperationIndex = getRandomNumber(operationsLength);
  const [operator, rightAnswer] = Object.entries(operations)[randomOperationIndex];
  const question = `${operandOne} ${operator} ${operandTwo}`;
  return [question, rightAnswer.toString()];
};

const generateGameData = () => {
  const operandOne = getRandomNumber(100);
  const operandTwo = getRandomNumber(10);
  return calculateData(operandOne, operandTwo);
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
