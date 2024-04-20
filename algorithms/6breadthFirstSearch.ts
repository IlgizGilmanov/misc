type bNodeType = {
  length: number;
  name: string;
  prevNode?: string;
};

const breadthFirstSearch = (
  from: string,
  to: string,
  graph: Map<string, string[]>
) => {
  if (!from || !to || !graph || !graph.size) return new Error("Error!");
  const checked: bNodeType[] = [{ length: 0, name: from }];
  const queue: bNodeType[] =
    graph
      .get(from)
      ?.map((item) => ({ length: 1, name: item, prevNode: from })) || [];

  while (queue.length) {
    console.log("queue", queue);
    console.log("checked", checked);
    const current = queue.shift();
    if (!current) return null;
    console.log("current", current);
    console.log("=======");
    checked.push(current);

    if (current.name === to) {
      const route: bNodeType[] = [current];
      let routeNode = current;
      while (routeNode.prevNode) {
        const prev = checked.find((item) => item.name === routeNode.prevNode);
        if (prev) {
          route.unshift(prev);
          routeNode = prev;
        }
      }
      return route.map((item) => item.name).join(" -> ");
    } else {
      const neighbors = graph.get(current.name);
      const filteredNeighbors = neighbors?.filter(
        (neighbor) => !checked.find((item) => item.name === neighbor)
      );
      if (filteredNeighbors?.length) {
        queue.push(
          ...filteredNeighbors.map((item) => ({
            length: current.length + 1,
            name: item,
            prevNode: current.name,
          }))
        );
      }
    }
  }

  return null;
};

type bNames1 = "cab" | "cat" | "car" | "bar" | "mat" | "bat" | "tic";
const bMap = new Map<bNames1, bNames1[]>();
bMap.set("cab", ["cat", "car"]);
bMap.set("car", ["cat", "bar"]);
bMap.set("bar", ["bat"]);
bMap.set("cat", ["mat", "bat"]);
bMap.set("mat", ["bat"]);
bMap.set("bat", []);
console.log(breadthFirstSearch("cab", "bar", bMap));

// type Names2 =
//   | "you"
//   | "bob"
//   | "clair"
//   | "alice"
//   | "anudj"
//   | "peggie"
//   | "tom"
//   | "jonnie";
// const graph2 = new Map<Names2, Names2[]>();
// graph2.set("you", ["bob", "clair", "alice"]);
// graph2.set("bob", ["anudj", "peggie"]);
// graph2.set("clair", ["tom", "jonnie"]);
// graph2.set("alice", ["peggie"]);
// graph2.set("anudj", []);
// graph2.set("peggie", []);
// graph2.set("tom", []);
// graph2.set("jonnie", []);
// console.log(search("you", "tom", graph2));
