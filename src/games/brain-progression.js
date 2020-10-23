import generateGame from '../game-generator.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'What number is missing in the progression?';

const createProgression = (startElem, step, length, hiddenElemIndex) => Array.from({ length },
  (el, index) => (
    index === hiddenElemIndex ? '..' : (startElem + index * step)
  ))
  .join(' ');

const generateRound = () => {
  const progressionLength = generateRandomNumber(12, 5);
  const hiddenElemIndex = generateRandomNumber(progressionLength);
  const startElem = generateRandomNumber(20);
  const progressionStep = generateRandomNumber(10, 1);
  const rightAnswer = startElem + hiddenElemIndex * progressionStep;
  const question = createProgression(
    startElem,
    progressionStep,
    progressionLength,
    hiddenElemIndex,
  );
  return [question, rightAnswer.toString()];
};

export default () => generateGame(rulesMessage, generateRound);
