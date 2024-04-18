type NodeType = {
  length: number;
  name: string;
  prevNode?: string;
};

const search = (from: string, to: string, graph: Map<string, string[]>) => {
  if (!from || !to || !graph || !graph.size) return new Error("Error!");
  const checked: NodeType[] = [{ length: 0, name: from }];
  const queue: NodeType[] =
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
      const route: NodeType[] = [current];
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

type Names1 = "cab" | "cat" | "car" | "bar" | "mat" | "bat" | "tic";
const map = new Map<Names1, Names1[]>();
map.set("cab", ["cat", "car"]);
map.set("car", ["cat", "bar"]);
map.set("bar", ["bat"]);
map.set("cat", ["mat", "bat"]);
map.set("mat", ["bat"]);
map.set("bat", []);
console.log(search("cab", "bar", map));

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
