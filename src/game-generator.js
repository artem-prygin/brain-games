import playGame, { roundsCount } from './index.js';

export default (rulesMessage, generateRound) => {
  const game = (new Array(roundsCount))
    .fill(null)
    .map(() => generateRound());
  return playGame(rulesMessage, game);
};
