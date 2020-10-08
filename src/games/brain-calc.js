import { playGame, gamesToWin } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'What is the result of the expression?';

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < gamesToWin; i += 1) {
    const operandOne = getMathRandom(100);
    const operandTwo = getMathRandom(10);
    const action = getMathRandom(3);
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
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

export default () => playGame(rulesMessage, getGameData());
