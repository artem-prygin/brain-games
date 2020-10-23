import playGame, { roundsCount } from './index.js';

export default (rulesMessage, generateRound) => {
  const game = Array.from({ length: roundsCount }, generateRound);
  return playGame(rulesMessage, game);
};
