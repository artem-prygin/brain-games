/* eslint-disable import/prefer-default-export */
export const getRandomNumber = (max, min = 0) => (Math.floor(Math.random() * (max - min) + min));
