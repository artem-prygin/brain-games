#!/usr/bin/env node
import { greeting, checkAnswer } from '../src/index.js';

const getMinNum = (num1, num2) => (num1 >= num2 ? num2 : num1);

const getGcd = (num1, num2) => {
  const minNum = getMinNum(num1, num2);
  let gcd = 1;
  for (let i = minNum; i >= 2; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const brainGcd = async () => {
  const name = await greeting();
  console.log('Find the greatest common divisor of given numbers.');
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
