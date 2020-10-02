#!/usr/bin/env node
import promptly from 'promptly';

const brainEven = async () => {
	console.log('Welcome to the Brain Games!');
	const name = await promptly.prompt('May I have your name? ');
	console.log(`Hello, ${name}\nAnswer "yes" if the number is even, otherwise answer "no".`);
	let rightAnswers = 0;
	do {
		const random = Math.floor(Math.random() * 100);
		const rightAnswer = random % 2 === 0 ? 'yes' : 'no';
		console.log(`Question: ${random}`);
		const answer = await promptly.prompt('Your answer? ');
		if (answer === rightAnswer) {
			console.log('Correct!');
			rightAnswers += 1;
		} else {
			console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
			rightAnswers = 0;
		}
	} while (rightAnswers < 3);
	console.log(`Congratulations, ${name}!`);
};

brainEven();
