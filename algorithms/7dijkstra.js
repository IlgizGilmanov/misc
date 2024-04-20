const getInitData1 = () => {
  // "start" | "A" | "B" | "end"

  const map = new Map();
  map.set("start", new Map());
  map.get("start")?.set("A", 6);
  map.get("start")?.set("B", 2);
  map.set("A", new Map());
  map.get("A")?.set("end", 1);
  map.set("B", new Map());
  map.get("B")?.set("A", 3);
  map.get("B")?.set("end", 5);
  map.set("end", new Map());

  const costs = new Map();
  costs.set("A", 6);
  costs.set("B", 2);
  costs.set("end", Infinity);

  const parents = new Map();
  parents.set("A", "start");
  parents.set("B", "start");
  parents.set("end", null);

  return { map, costs, parents };
};

const getInitData2 = () => {
  // "start" | "A" | "B" | "C" | "D" | "end"

  const map = new Map();
  map.set("start", new Map());
  map.get("start")?.set("A", 5);
  map.get("start")?.set("B", 2);
  map.set("A", new Map());
  map.get("A")?.set("C", 4);
  map.get("A")?.set("D", 2);
  map.set("B", new Map());
  map.get("B")?.set("D", 7);
  map.set("C", new Map());
  map.get("C")?.set("end", 3);
  map.get("C")?.set("D", 6);
  map.set("D", new Map());
  map.get("D")?.set("end", 1);
  map.set("end", new Map());

  const costs = new Map();
  costs.set("A", 5);
  costs.set("B", 2);
  costs.set("C", Infinity);
  costs.set("D", Infinity);
  costs.set("end", Infinity);

  const parents = new Map();
  parents.set("A", "start");
  parents.set("B", "start");
  parents.set("C", null);
  parents.set("D", null);
  parents.set("end", null);

  return { map, costs, parents };
};

const findLowestCostNode = (innerCosts, innerProcess) => {
  let minKey = null;
  let minValue = Infinity;

  for (const [key, value] of innerCosts) {
    if (!innerProcess.includes(key) && value < minValue) {
      minKey = key;
      minValue = value;
    }
  }
  return minKey;
};

// const { map, costs, parents } = getInitData1();
const { map, costs, parents } = getInitData2();
const processed = [];

const dijkstraSearch = () => {
  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs.get(node);
    const neighbors = map.get(node);
    for (key of neighbors.keys()) {
      const newCost = cost + neighbors.get(key);
      if (costs.get(key) > newCost) {
        costs.set(key, newCost);
        parents.set(key, node);
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  return costs.get("end");
};

console.log(dijkstraSearch());
