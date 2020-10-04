#!/usr/bin/env node
import { greeting, checkAnswer } from '../../src/index.js';

const getMinNum = (num1, num2) => (num1 >= num2 ? num2 : num1);

const getGcd = (num1, num2) => {
	const minNum = getMinNum(num1, num2);
	let gcd = 1;
	for (let i = 2; i <= minNum; i += 1) {
		if (num1 % i === 0 && num2 % i === 0) {
			gcd = i;
		}
	}
	return gcd;
};

const brainGcd = async () => {
	const name = await greeting();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	let countRightAnswers = 0;
	do {
		const num1 = Math.floor(Math.random() * 100);
		const num2 = Math.floor(Math.random() * 100);
		const question = `${num1} ${num2}`;
		const gcd = getGcd(num1, num2);
		countRightAnswers = await checkAnswer(name, question, gcd.toString(), countRightAnswers);
	} while (countRightAnswers < 3);
};

brainGcd().catch(() => console.log('\nGood bye!'));
