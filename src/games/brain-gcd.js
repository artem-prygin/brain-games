import playGame, { roundsCount } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const generateRound = () => {
  const num1 = generateRandomNumber(2, 100);
  const num2 = generateRandomNumber(2, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);
  return [question, rightAnswer.toString()];
};

export default () => playGame(rulesMessage, Array.from({ length: roundsCount }, generateRound));
