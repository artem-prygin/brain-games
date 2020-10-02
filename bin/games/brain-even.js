#!/usr/bin/env node
import { greeting, checkAnswer } from '../../src/index.js';

const brainEven = async () => {
	const name = await greeting();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	let countRightAnswers = 0;
	do {
		const random = Math.floor(Math.random() * 100);
		const rightAnswer = random % 2 === 0 ? 'yes' : 'no';
		countRightAnswers = await checkAnswer(name, random, rightAnswer, countRightAnswers);
	} while (countRightAnswers < 3);
};

brainEven();
