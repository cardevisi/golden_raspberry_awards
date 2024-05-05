export const getConditionalBackgroundColor = (index: number) => {
  if (index % 2 === 0) {
    return 'primary_001';
  }
  return 'primary_005';
};
