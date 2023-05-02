function factorial(num) {
    let result = 1;
    let i = num;
    while (i > 0) {
      result *= i;
      i--;
    }
    return result;
  }
  const myNum = 5;
const myFactorial = factorial(myNum);
console.log(myFactorial); // Output: 120
