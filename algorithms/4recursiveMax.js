const getMax = (arr, curMax) => {
  if (arr === undefined || !arr.length)
    return new Error("Provide array with numbers");
  if (arr.length === 1) return curMax > arr[0] ? curMax : arr[0];

  const last = arr[arr.length - 1];
  return getMax(arr.slice(0, -1), curMax > last ? curMax : last);
};

console.log("[]", getMax([]));
console.log("[4]", getMax([4]));
console.log("[10, 120, -25, 49, 33]", getMax([10, 120, -25, 49, 33]));
