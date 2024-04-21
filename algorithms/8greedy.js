// type States = "mt" | "wa" | "or" | "id" | "nv" | "ut" | "ca" | "az";
// type Stations = "kone" | "ktwo" | "kthree" | "kfour" | "kfive";

const getIntersection = (setA, setB) => {
  const _intersection = new Set();
  for (const item of setA) {
    if (setB.has(item)) _intersection.add(item);
  }
  return _intersection;
};

const handleGreedy = (allStates, allStations) => {
  const resStations = new Set();
  const neededStates = new Set(allStates);
  const availableStations = new Map(allStations);

  while (neededStates.size) {
    let bestStation;
    const bestCoveredStates = new Set();

    for (const [station, states] of availableStations) {
      const filteredStates = getIntersection(states, neededStates);
      if (filteredStates.size > bestCoveredStates.size) {
        bestStation = station;
        bestCoveredStates.clear();
        filteredStates.forEach((item) => bestCoveredStates.add(item));
      }
    }

    if (bestStation) {
      resStations.add(bestStation);
      availableStations.delete(bestStation);
      bestCoveredStates.forEach((item) => neededStates.delete(item));
    }
  }

  return resStations;
};

const statesSet = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const stationsMap = new Map();
stationsMap.set("kone", new Set(["id", "nv", "ut"]));
stationsMap.set("ktwo", new Set(["wa", "id", "mt"]));
stationsMap.set("kthree", new Set(["or", "nv", "ca"]));
stationsMap.set("kfour", new Set(["nv", "ut"]));
stationsMap.set("kfive", new Set(["ca", "az"]));

console.log("greedy: ", handleGreedy(statesSet, stationsMap));
