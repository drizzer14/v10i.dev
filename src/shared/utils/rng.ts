export const rng = (min = 0, max = 1): number => {
  return Math.round(Math.random() * (max - min) + min);
};
