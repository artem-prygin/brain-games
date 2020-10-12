import { playGame } from '../index.js';
import getGameDataForAllRounds from '../get-game-data.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'What is the result of the expression?';

const sumAction = (operandOne, operandTwo) => {
  const question = `${operandOne} + ${operandTwo}`;
  const rightAnswer = operandOne + operandTwo;
  return [question, rightAnswer];
};

const subtractAction = (operandOne, operandTwo) => {
  const question = `${operandOne} - ${operandTwo}`;
  const rightAnswer = operandOne - operandTwo;
  return [question, rightAnswer];
};

const multiplyAction = (operandOne, operandTwo) => {
  const question = `${operandOne} * ${operandTwo}`;
  const rightAnswer = operandOne * operandTwo;
  return [question, rightAnswer];
};

const actions = [sumAction, subtractAction, multiplyAction];

const getGameData = () => {
  const operandOne = getMathRandom(100);
  const operandTwo = getMathRandom(10);
  const randomAction = actions[getMathRandom(actions.length)];
  return randomAction(operandOne, operandTwo);
};

export default () => playGame(rulesMessage, getGameDataForAllRounds(getGameData));
