let step = 0;
const sort = (arr) => {
  step++;
  if (!arr) return [];
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length / 2];
  const [lessArr, greaterArr] = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length / 2) continue;
    if (arr[i] > pivot) greaterArr.push(arr[i]);
    else lessArr.push(arr[i]);
  }
  return [...sort(lessArr), pivot, ...sort(greaterArr)];
};

// console.log(sort([]));
// console.log(sort([1]));
console.log(sort([54, 11, 30, 121, 345, 107, 99, 73, 80]));
console.log("step", step);
