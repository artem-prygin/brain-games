import generateGame from '../game-generator.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => generateGame(rulesMessage, generateRound);
