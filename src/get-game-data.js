import { gamesToWin } from './index.js';

export default (gameData) => {
  const allGameData = [];
  for (let i = 0; i < gamesToWin; i += 1) {
    allGameData.push(gameData());
  }
  return allGameData;
};
