import { roundsCount } from './index.js';

export default (gameData) => {
  const allGameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    allGameData.push(gameData());
  }
  return allGameData;
};
