import { playGame, gamesToWin } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';

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
  const gameData = [];
  for (let i = 0; i < gamesToWin; i += 1) {
    const question = getMathRandom(100, 2);
    const rightAnswer = isPrime(question);
    gameData.push([question, rightAnswer]);
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

export default () => playGame(rulesMessage, getGameData());
