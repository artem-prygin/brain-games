import playGame, { roundsCount } from './index.js';

export default (rulesMessage, generateRoundData) => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateRoundData());
  }
  return playGame(rulesMessage, gameData);
};
