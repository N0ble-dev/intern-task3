function findRepeatedNumbers(arr) {
  let counts = {};
  let repeatedNumbers = [];

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num in counts) {
    if (counts[num] > 1) {
      repeatedNumbers.push(Number(num));
    }
  }

  return repeatedNumbers;
}

// Example usage:
let numbers = [1, 2, 2, 3, 4, 4, 4, 5,];
console.log(findRepeatedNumbers(numbers));
