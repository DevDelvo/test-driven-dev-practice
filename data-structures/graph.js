// Interviewer Prompt
// Write a function that determines if a path exists between two vertices of a directed graph.

// The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.

// In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but not a connection from vertex b to vertex a.

// {
//   a: ['b'],
//   b: ['c', 'd'],
//   c: ['d']
// }


function doesPathExist(graph, start, end) {
    if(!graph[start]) return false;
    visited[start] = true;
    
}

module.exports = {
    doesPathExist,
}