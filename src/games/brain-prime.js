import { playGame } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';
import getGameDataForAllRounds from '../get-game-data.js';

const rulesMessage = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const question = getMathRandom(100, 2);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, getGameDataForAllRounds(getGameData));
