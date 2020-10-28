import playGame, { roundsCount } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, Array.from({ length: roundsCount }, generateRound));
