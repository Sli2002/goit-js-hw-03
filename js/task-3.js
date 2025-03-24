function filterArray(numbers, value) {
  const arrNumber = [];
  for (let i = 0; numbers.length > i; i++) {
    if (numbers[i] > value) {
      arrNumber.push(numbers[i]);
    }
  }

  return arrNumber;
}

const res = filterArray([1, 2, 3, 4, 5], 3);
console.log(res);
const res1 = filterArray([1, 2, 3, 4, 5], 4);
console.log(res1);
const res2 = filterArray([1, 2, 3, 4, 5], 5);
console.log(res2);
const res3 = filterArray([12, 24, 8, 41, 76], 38);
console.log(res3);
const res4 = filterArray([12, 24, 8, 41, 76], 20);
console.log(res4);
