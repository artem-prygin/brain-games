import promptly from 'promptly';
import greetAndGetName from './cli.js';

export const gamesToWin = 3;

const sayGoodBye = () => console.log('\nGood bye!');

export const playGame = async (rules, gameData) => {
  let name = '';
  try {
    name = await greetAndGetName();
  } catch (e) {
    sayGoodBye();
    return;
  }
  let gamesCount = 0;
  console.log(rules);
  do {
    const [question, rightAnswer] = gameData[gamesCount];
    let userAnswer = '';
    console.log(`Question: ${question}`);
    try {
      userAnswer = await promptly.prompt('Your answer: ');
    } catch (e) {
      sayGoodBye();
      return;
    }
    if (userAnswer === rightAnswer.toString()) {
      gamesCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}!`);
      gamesCount = -1;
    }
  } while (gamesCount > 0 && gamesCount < gamesToWin);
  if (gamesCount === gamesToWin) {
    console.log(`Congratulations, ${name}!`);
  }
};
