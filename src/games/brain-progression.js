import playGame, { roundsCount } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'What number is missing in the progression?';

const generateQuestion = (startElem, step, length, hiddenElemIndex) => Array.from({ length },
  (el, index) => (index === hiddenElemIndex ? '..' : startElem + index * step))
  .join(' ');

const generateRound = () => {
  const progressionLength = generateRandomNumber(5, 12);
  const hiddenElemIndex = generateRandomNumber(0, progressionLength - 1);
  const startElem = generateRandomNumber(1, 20);
  const progressionStep = generateRandomNumber(1, 10);
  const rightAnswer = startElem + hiddenElemIndex * progressionStep;
  const question = generateQuestion(startElem, progressionStep, progressionLength, hiddenElemIndex);
  return [question, rightAnswer.toString()];
};

export default () => playGame(rulesMessage, Array.from({ length: roundsCount }, generateRound));
