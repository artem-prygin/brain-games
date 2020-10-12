import { playGame } from '../index.js';
import getGameDataForAllRounds from '../get-game-data.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getMathRandom(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, getGameDataForAllRounds(getGameData));
