function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let sortedArr1 = [...arr1].sort();
  let sortedArr2 = [...arr2].sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return false;
  }

  return true;
}

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];
console.log(arraysEqual(array1, array2));
