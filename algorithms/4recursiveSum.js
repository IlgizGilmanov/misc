const sum = (arr) => {
  if (arr === undefined || !arr.length)
    return new Error("Provide array with numbers");
  if (arr.length === 1) return arr[0];
  return arr[arr.length - 1] + sum(arr.slice(0, -1));
};

console.log("[]", sum([]));
console.log("[0]", sum([0]));
console.log("[4]", sum([4]));
console.log("[1,2,3]", sum([1, 2, 3]));
console.log("[1,-2,3]", sum([1, -2, 3]));
