import playGame from '../index.js';
import getRandomNumber from '../helpers.js';
import generateGameDataForAllRounds from '../generate-game-data.js';

const rulesMessage = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    const prevElement = progression[i - 1];
    progression.push(prevElement + step);
  }
  return progression;
};

const createProgressionQuestion = (progression, hidden) => {
  const question = [];
  for (let i = 0; i < progression.length; i += 1) {
    question.push(`${progression[i]}`);
  }
  question[hidden] = '..';
  return question.join(' ').trim();
};

const generateGameData = () => {
  const progressionLength = getRandomNumber(12, 5);
  const hiddenElementIndex = getRandomNumber(progressionLength);
  const startElement = getRandomNumber(20);
  const progressionStep = getRandomNumber(10, 1);
  const progression = createProgression(startElement, progressionStep, progressionLength);
  const rightAnswer = progression[hiddenElementIndex];
  const question = createProgressionQuestion(progression, hiddenElementIndex);
  return [question, rightAnswer.toString()];
};

export default () => playGame(rulesMessage, generateGameDataForAllRounds(generateGameData));
