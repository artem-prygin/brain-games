import generateGameData from '../game-data.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'What is the result of the expression?';

const calculateData = (operandOne, operandTwo) => {
  const operations = {
    '+': operandOne + operandTwo,
    '-': operandOne - operandTwo,
    '*': operandOne * operandTwo,
  };
  const operationsLength = Object.keys(operations).length;
  const randomOperationIndex = generateRandomNumber(operationsLength);
  const [operator, rightAnswer] = Object.entries(operations)[randomOperationIndex];
  const question = `${operandOne} ${operator} ${operandTwo}`;
  return [question, rightAnswer.toString()];
};

const generateRoundData = () => {
  const operandOne = generateRandomNumber(100);
  const operandTwo = generateRandomNumber(10);
  return calculateData(operandOne, operandTwo);
};

export default () => generateGameData(rulesMessage, generateRoundData);
