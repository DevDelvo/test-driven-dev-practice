// Definitions
// A queue is a data structure that stores pieces of data and returns them in the same order in which they were inserted. 
// One way of implementing them is as a linked list.
// A priority queue is a data structure that takes a priority value with each piece of data and returns the data in order of priority.

// Interviewer Prompt
// Implement a priority queue with the following 3 methods:

// insert(data, priority) // inserts data into the priority queue with the given priority

// peek() // returns the value of the item with the highest priority without removing it from the priority queue

// popMax() // returns the value of the item with the highest priority and also removes it from the priority queue

// For the purposes of our implementation, "higher priority" corresponds to a higher integer value. 
// Note, however, that this could be implemented either way.
// Example Output
// A hospital emergency room could use a priority queue to determine the order in which their doctors see patients. 
// The priority queue would work the following way:

// const pq = new PriorityQueue();
// pq.insert('Jill, concussion', 7);
// pq.insert('John, stomach pain', 5);
// pq.peek() // ==> 'Jill, concussion'
// pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
// pq.insert('Dave, sprained ankle', 1);
// pq.insert('Bob, breathing problems', 8)
// pq.peek() // ==> 'Bob, breathing problems'
// pq.popMax() // ==> 'Bob, breathing problems'
// pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ
// Approach
// A naive approach would be to have what is essentially a linked list where each node also has a priority. 
// To insert, simply traverse until you reach a node that is lesser in priority, and put the new node just before that one.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.first = null;
    }

    insert(val, priority) {
        const newNode = new Node(val, priority);
        if (!this.first || this.first.priority < priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let current = this.first;
            while (current.next && current.next.priority > priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current = newNode;
        }
    }

    peek() {
        return 
    }

    popMax() {

    }
}

module.exports = {
    Node,
    PriorityQueue
}