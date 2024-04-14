const sort = (array) => {
  const [tempArr, resArr] = [[...array], []];

  for (let i = 0; i < array.length; i++) {
    let indexMin = 0;
    for (let j = 1; j < tempArr.length; j++) {
      if (tempArr[j].satellites < tempArr[indexMin].satellites) indexMin = j;
    }
    resArr.push(tempArr[indexMin]);
    tempArr.splice(indexMin, 1);
  }

  return resArr;
};

const arr = [
  { planet: "Earth", satellites: 1 },
  { planet: "Mars", satellites: 2 },
  { planet: "Jupiter", satellites: 80 },
  { planet: "Saturn", satellites: 83 },
  { planet: "Uranus", satellites: 27 },
  { planet: "Neptune", satellites: 14 },
];
console.log("Sorted", sort(arr));
