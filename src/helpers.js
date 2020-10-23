/* eslint-disable import/prefer-default-export */
export const generateRandomNumber = (max, min = 0) => (Math.floor(
  Math.random() * (max - min) + min,
));
