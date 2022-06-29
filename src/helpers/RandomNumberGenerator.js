export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export const randomQuestion = max => {
  const random = getRandomIntInclusive(0, max);
  const random1 = getRandomIntInclusive(0, max);

  return [random, random1];
};

export const randomNumber = no => {
  return getRandomIntInclusive(0, no);
};
