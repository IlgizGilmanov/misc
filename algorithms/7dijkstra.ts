// type dNames = "start" | "A" | "B" | "end";
// type dInnerMap = Map<dNames, number>;
// type dNodeType = {
//   length: number;
//   name: string;
//   prevNode?: string;
// };

// const dMap = new Map<dNames, dInnerMap>();
// dMap.set("start", new Map<dNames, number>());
// dMap.get("start")?.set("A", 6);
// dMap.get("start")?.set("B", 2);
// dMap.set("A", new Map<dNames, number>());
// dMap.get("A")?.set("end", 1);
// dMap.set("B", new Map<dNames, number>());
// dMap.get("B")?.set("A", 3);
// dMap.get("B")?.set("end", 5);
// dMap.set("end", new Map<dNames, number>());
// // console.log("dMap", dMap);

// const costs = new Map<dNames, number>();
// costs.set("A", 6);
// costs.set("B", 2);
// costs.set("end", Math.pow(10, 1000));
// console.log("costs", costs);
// for (const [key, value] of costs) {
//   console.log("value", value);
// }

// const parents = new Map<dNames, dNames | null>();
// parents.set("A", "start");
// parents.set("B", "start");
// parents.set("end", null);
// // console.log("parents", parents);

// const processed = [];

// const findLowestCostNode = () => {
//   let minKey: dNames | null = null;
//   let minValue = Infinity;

//   for (let [key, value] of costs.entries()) {
//     console.log("value", value);
//     if (value < minValue) {
//       minKey = key;
//       minValue = value;
//     }
//   }
//   return minKey;
// };

// const dijkstraSearch = () => {
//   // const node = findLowestCostNode();
//   // console.log("node", node);
// };

// console.log(dijkstraSearch());
