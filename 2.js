function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function findPrimesInRange(arr, min, max) {
  return arr.filter(num => num >= min && num <= max && isPrime(num));
}

let numbers = [2, 3, 4, 5, 10, 15, 17, 20, 23];
console.log(findPrimesInRange(numbers, 1, 20));
