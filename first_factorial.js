function firstFactorial(num) {
  for(i = num - 1; i > 0; i--) {
    num *= i
  };
  return num;
};
