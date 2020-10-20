import playGame from '../index.js';
import generateGameDataForAllRounds from '../generate-game-data.js';
import { getRandomNumber } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
