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
  const queue = [startNode];
  while (queue.length) {
    const node = queue.shift();
    callback(node.value);
    queue.push(...node.children);
    // queue = queue.concat(node.children) 
    // or
    // queue.push.apply(queue, node.children);
  }
}

function depthFirstPreOrder(startNode, callback) {
  callback(startNode.value);
  startNode.children.forEach(node => {
    depthFirstPreOrder(node, callback);
  });
}

function depthFirstPostOrder(startNode, callback) {
  startNode.children.forEach(node => {
    depthFirstPostOrder(node, callback);
  });
  callback(startNode.value);
}

module.exports = {
    node,
    breadthFirst,
    depthFirstPreOrder,
    depthFirstPostOrder
}