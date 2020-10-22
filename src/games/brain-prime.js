import generateGameData from '../game-data.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const question = generateRandomNumber(100, 2);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => generateGameData(rulesMessage, generateRoundData);
