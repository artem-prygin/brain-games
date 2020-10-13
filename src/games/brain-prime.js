import { playGame } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';
import generateGameDataForAllRounds from '../generate-game-data.js';

const rulesMessage = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrimeYesOrNo = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return num > 3 ? 'yes' : 'no';
};

const generateGameData = () => {
  const question = getMathRandom(100, 2);
  const rightAnswer = isPrimeYesOrNo(question);
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
