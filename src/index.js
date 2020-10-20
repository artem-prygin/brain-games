import promptly from 'promptly';
import greetAndGetName from './cli.js';

export const roundsCount = 3;

export default async (rules, gameData) => {
  try {
    const name = await greetAndGetName();
    console.log(rules);
    for (let i = 0; i < roundsCount; i += 1) {
      const [question, rightAnswer] = gameData[i];
      console.log(`Question: ${question}`);
      const userAnswer = await promptly.prompt('Your answer: ');
      if (userAnswer !== rightAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
  } catch (e) {
    console.log('\nGood bye!');
  }
};
