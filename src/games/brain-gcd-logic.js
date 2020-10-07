import playGame from '../index.js';
import mathRandom from '../helpers/math-random.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getMinNum = (num1, num2) => (num1 >= num2 ? num2 : num1);

const getGcd = (num1, num2) => {
  const minNum = getMinNum(num1, num2);
  let gcd = 1;
  for (let i = minNum; i >= 2; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const getGameData = () => {
  const num1 = mathRandom(100);
  const num2 = mathRandom(100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);
  return [question, rightAnswer];
};

export default async () => {
  await playGame(rulesMessage, getGameData);
};
