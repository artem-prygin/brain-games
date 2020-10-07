import playGame from '../index.js';
import mathRandom from '../helpers/math-random.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = mathRandom(100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default async () => {
  await playGame(rulesMessage, getGameData);
};
