import { playGame } from '../index.js';
import generateGameDataForAllRounds from '../generate-game-data.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'What is the result of the expression?';

const calculateAndGenerateData = (operandOne, operandTwo) => {
  const operations = {
    '+': operandOne + operandTwo,
    '-': operandOne - operandTwo,
    '*': operandOne * operandTwo,
  };
  const operationsLength = Object.keys(operations).length;
  const randomOperationIndex = getMathRandom(operationsLength);
  const [operator, rightAnswer] = Object.entries(operations)[randomOperationIndex];
  const question = `${operandOne} ${operator} ${operandTwo}`;
  return [question, rightAnswer];
};

const generateGameData = () => {
  const operandOne = getMathRandom(100);
  const operandTwo = getMathRandom(10);
  return calculateAndGenerateData(operandOne, operandTwo);
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
