import promptly from 'promptly';
import greeting from './cli.js';
import enums from './enums/games-enums.js';

const playGame = async (rules, gameData) => {
  const name = await greeting();
  let rightAnswersCount = 0;
  console.log(rules);
  do {
    const [question, rightAnswer] = gameData();
    const userAnswer = await promptly.prompt(`Question: ${question}\nYour answer: `);
    if (userAnswer === rightAnswer.toString()) {
      rightAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}!`);
      rightAnswersCount = 0;
    }
  } while (rightAnswersCount < enums.GAMES_TO_WIN);
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
