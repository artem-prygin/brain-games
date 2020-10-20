import playGame from '../index.js';
import generateGameDataForAllRounds from '../generate-game-data.js';
import getRandomNumber from '../helpers.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const generateGameData = () => {
  const num1 = getRandomNumber(100, 2);
  const num2 = getRandomNumber(100, 2);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);
  return [question, rightAnswer.toString()];
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
