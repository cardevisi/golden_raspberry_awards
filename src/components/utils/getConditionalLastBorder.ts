export const getConditionalLastBorder = (index: number, totalItems: number) => {
  return index === totalItems - 1 ? 0 : 1;
};
