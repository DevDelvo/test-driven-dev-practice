// Interviewer Prompt
// Today you will write a series of iterator functions for trees.
// breadthFirst
// depthFirstPreOrder
// (if time allows)
// depthFirstPostOrder

// Each of these function will take a node of the tree and a callback. 
// The function will iterate through the child nodes, calling the callback function on each of them. 
// The difference between them is the order in which they iterate.

function node(value) {
    return {
      value,
      children: []
    }
  }

function breadthFirst(startNode, callback) {

}

function depthFirstPreOrder(startNode, callback) {

}

function depthFirstPostOrder(startNode, callback) {

}

module.exports = {
    node,
    breadthFirst,
    depthFirstPreOrder,
    depthFirstPostOrder
}