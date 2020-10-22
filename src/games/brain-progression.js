import generateGameData from '../game-data.js';
import { generateRandomNumber } from '../helpers.js';

const rulesMessage = 'What number is missing in the progression?';

const createProgression = (startElem, step, length, hiddenElemIndex) => (new Array(length))
  .fill(0)
  .map((el, index) => (index === hiddenElemIndex ? '..' : (startElem + index * step)))
  .join(' ');

const generateRoundData = () => {
  const progressionLength = generateRandomNumber(12, 5);
  const hiddenElemIndex = generateRandomNumber(progressionLength);
  const startElem = generateRandomNumber(20);
  const progressionStep = generateRandomNumber(10, 1);
  const rightAnswer = startElem + hiddenElemIndex * progressionStep;
  // eslint-disable-next-line max-len
  const question = createProgression(startElem, progressionStep, progressionLength, hiddenElemIndex);
  return [question, rightAnswer.toString()];
};

export default () => generateGameData(rulesMessage, generateRoundData);
