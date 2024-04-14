const factorial = (num) => {
  if (num === undefined || num < 0)
    return new Error("Argument should be positive integer number");
  if (num <= 0) return 1;
  return num * factorial(num - 1);
};

console.log("factorial(-1)", factorial(-1));
console.log("factorial(0)", factorial(0));
console.log("factorial(1)", factorial(1));
console.log("factorial(2)", factorial(2));
console.log("factorial(3)", factorial(3));
console.log("factorial(4)", factorial(4));
console.log("factorial(5)", factorial(5));
console.log("factorial(15)", factorial(15));
