function getOddNumbersAndSum(arr) {
    let oddNumbers = [];
    let oddSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
        oddSum += arr[i];
      }
    }
  
    return { oddNumbers, oddSum };
  }
  const myArray = [1, 2, 3, 4, 5];
const result = getOddNumbersAndSum(myArray);
console.log(result.oddNumbers); // Output: [1, 3, 5]
console.log(result.oddSum); // Output: 9
