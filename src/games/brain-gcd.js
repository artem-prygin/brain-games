import { playGame } from '../index.js';
import getGameDataForAllRounds from '../get-game-data.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num1 % num2 === 0 ? num2 : getGcd(num2, num1 % num2));

const getGameData = () => {
  const num1 = getMathRandom(100, 2);
  const num2 = getMathRandom(100, 2);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, getGameDataForAllRounds(getGameData));
