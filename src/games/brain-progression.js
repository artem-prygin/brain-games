import { playGame, gamesToWin } from '../index.js';
import getMathRandom from '../helpers/get-math-random.js';

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
  const gameData = [];
  for (let i = 0; i < gamesToWin; i += 1) {
    const progressionLength = getMathRandom(12, 5);
    const hiddenElementIndex = getMathRandom(progressionLength);
    const startElement = getMathRandom(20);
    const progressionStep = getMathRandom(10);
    const progression = createProgression(startElement, progressionStep, progressionLength);
    const rightAnswer = progression[hiddenElementIndex];
    const question = createProgressionQuestion(progression, hiddenElementIndex);
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

export default () => playGame(rulesMessage, getGameData());
