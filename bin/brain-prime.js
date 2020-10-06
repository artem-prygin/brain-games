#!/usr/bin/env node
import { greeting, checkAnswer } from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = async () => {
  const name = await greeting();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  let countRightAnswers = 0;
  do {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = isPrime(question);
    countRightAnswers = await checkAnswer(name, question, rightAnswer, countRightAnswers);
  } while (countRightAnswers < 3);
};

brainPrime().catch(() => console.log('\nGood bye!'));
