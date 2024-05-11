const checkIfPalindrom = (word) => {
  if (!word || word.length === 1) return false;

  const [firstPart, secordPart] = [
    word.slice(0, word.length / 2),
    word.slice(-word.length / 2),
  ];

  return firstPart === secordPart.split("").reverse().join("");
};

[
  "kayak",
  "deified",
  "rotator",
  "repaper",
  "deed",
  "peep",
  "wow",
  "noon",
  "second",
].forEach((item) => {
  console.log(checkIfPalindrom(item));
});
