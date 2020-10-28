import playGame, { roundsCount } from '../index.js';
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

const generateRound = () => {
  const question = generateRandomNumber(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => playGame(rulesMessage, Array.from({ length: roundsCount }, generateRound));

