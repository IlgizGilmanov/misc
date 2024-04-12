const searchBinary = (number, array, withLog = true) => {
  let [startIndex, endIndex] = [0, array.length - 1];

  for (let i = 0; startIndex <= endIndex; i++) {
    const midIndex = Math.floor((endIndex + startIndex) / 2);
    if (withLog)
      console.log(
        "step, startIndex, endIndex, midIndex, array[midIndex]",
        i + 1,
        startIndex,
        endIndex,
        midIndex,
        array[midIndex]
      );
    if (number === array[midIndex]) return { index: midIndex, step: i + 1 };
    if (number > array[midIndex]) startIndex = midIndex + 1;
    else endIndex = midIndex - 1;
  }

  return null;
};

const arr100 = new Array(100).fill(1).map((item, index) => index * 3);
const arr = [1, 21, 37, 40, 52, 88, 100, 114, 121, 140, 176];
const arr2 = [1];

const testArr = arr100;
console.log("empty", searchBinary(114, [], false));
console.log("single, exists", searchBinary(1, [1], false));
console.log("single, not exists", searchBinary(13, [1], false));
console.log("not exists", searchBinary(9999, testArr, false));
console.log("first", searchBinary(0, testArr, false));
console.log("mid", searchBinary(114, testArr, false));
console.log("last", searchBinary(297, testArr, false));
