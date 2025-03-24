function makeArray(firstArray, secondArray, maxLength) {
  const number = maxLength;
  const arr = [].concat(firstArray, secondArray);
  const arrLength = arr.length;
  const coppyArrLength = arr.slice(0, number);
  if (arrLength >= number) {
    return coppyArrLength;
  } else {
    return arr;
  }
}

const arr1 = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
console.log(arr1);
const arr2 = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
console.log(arr2);
const arr3 = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
console.log(arr3);
const arr4 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
console.log(arr4);
const arr5 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
console.log(arr5);
const arr6 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
console.log(arr6);

