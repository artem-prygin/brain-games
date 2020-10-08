import { playGame, gamesToWin } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < gamesToWin; i += 1) {
    const question = getMathRandom(100);
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

export default () => playGame(rulesMessage, getGameData());
