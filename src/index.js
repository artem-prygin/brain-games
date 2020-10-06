import promptly from 'promptly';

const greeting = async () => {
  const name = await promptly.prompt('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const checkAnswer = async (name, question, rightAnswer, countRightAnswers) => {
  const answer = await promptly.prompt(`Question: ${question}\nYour answer? `);
  if (answer === rightAnswer) {
    console.log('Correct!');
    if (countRightAnswers === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    return countRightAnswers + 1;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
  return 0;
};

export { greeting, checkAnswer };
