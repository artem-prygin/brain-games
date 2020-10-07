import playGame from '../index.js';
import mathRandom from '../helpers/math-random.js';

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
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hidden) {
      question += '.. ';
    } else {
      question += `${progression[i]} `;
    }
  }
  return question.trim();
};

const getGameData = () => {
  const progressionLength = mathRandom(12, 5);
  const hiddenElementIndex = mathRandom(progressionLength);
  const startElement = mathRandom(20);
  const progressionStep = mathRandom(10);
  const progression = createProgression(startElement, progressionStep, progressionLength);
  const rightAnswer = progression[hiddenElementIndex];
  const question = createProgressionQuestion(progression, hiddenElementIndex);
  return [question, rightAnswer];
};

export default async () => {
  await playGame(rulesMessage, getGameData);
};
