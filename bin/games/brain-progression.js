#!/usr/bin/env node
import { greeting, checkAnswer } from '../../src/index.js';

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

const brainProgression = async () => {
	const name = await greeting();
	console.log('What number is missing in the progression?');
	let countRightAnswers = 0;
	do {
		const progressionLength = Math.floor(Math.random() * (12 - 5) + 5);
		const hiddenElementIndex = Math.floor(Math.random() * progressionLength);
		const startElement = Math.floor(Math.random() * 20);
		const progressionStep = Math.floor(Math.random() * 10);
		const progression = createProgression(startElement, progressionStep, progressionLength);
		const hiddenElement = progression[hiddenElementIndex];
		const question = createProgressionQuestion(progression, hiddenElementIndex);

		countRightAnswers = await checkAnswer(name, question, hiddenElement.toString(), countRightAnswers);
	} while (countRightAnswers < 3);
};

brainProgression().catch(() => console.log('\nGood bye!'));
