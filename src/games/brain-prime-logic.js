import playGame from '../index.js';
import mathRandom from '../helpers/math-random.js';

const rulesMessage = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const question = mathRandom(100, 2);
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

export default async () => {
  await playGame(rulesMessage, getGameData);
};
