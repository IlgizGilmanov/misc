var search = function (from, to, graph) {
    var _a;
    if (!from || !to || !graph || !graph.size)
        return new Error("Error!");
    var checked = [{ length: 0, name: from }];
    var queue = ((_a = graph
        .get(from)) === null || _a === void 0 ? void 0 : _a.map(function (item) { return ({ length: 1, name: item, prevNode: from }); })) || [];
    var _loop_1 = function () {
        console.log("queue", queue);
        console.log("checked", checked);
        var current = queue.shift();
        if (!current)
            return { value: null };
        console.log("current", current);
        console.log("=======");
        checked.push(current);
        if (current.name === to) {
            var route = [current];
            var routeNode_1 = current;
            while (routeNode_1.prevNode) {
                var prev = checked.find(function (item) { return item.name === routeNode_1.prevNode; });
                if (prev) {
                    route.unshift(prev);
                    routeNode_1 = prev;
                }
            }
            return { value: route.map(function (item) { return item.name; }).join(" -> ") };
        }
        else {
            var neighbors = graph.get(current.name);
            var filteredNeighbors = neighbors === null || neighbors === void 0 ? void 0 : neighbors.filter(function (neighbor) { return !checked.find(function (item) { return item.name === neighbor; }); });
            if (filteredNeighbors === null || filteredNeighbors === void 0 ? void 0 : filteredNeighbors.length) {
                queue.push.apply(queue, filteredNeighbors.map(function (item) { return ({
                    length: current.length + 1,
                    name: item,
                    prevNode: current.name,
                }); }));
            }
        }
    };
    while (queue.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return null;
};
var map = new Map();
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
