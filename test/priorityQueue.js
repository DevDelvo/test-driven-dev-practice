const { Node, PriorityQueue } = require('../data-structures/priorityQueue');
const { expect } = require('chai');
const sinon = require('sinon');

describe("Node", function() {
    const node = new Node('Kevin - Crazy', 10);
    it("takes in a value as a string and sets it to the val property", function() {
        expect(node.val).to.be.a('string');
        
    });
    it("takes in a number and sets it to the priority property", function() {
        expect(node.priority).to.be.a('number');
    });
})

describe("Priority Queue", function() {
    let pq = new PriorityQueue(); 
    beforeEach(function() {
        pq = new PriorityQueue()
        pq.insert('Jill, concussion', 7);
        pq.insert('John, stomach pain', 5);
    });
    // pq.peek() // ==> 'Jill, concussion'
    // pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
    // pq.insert('Dave, sprained ankle', 1);
    // pq.insert('Bob, breathing problems', 8)
    // pq.peek() // ==> 'Bob, breathing problems'
    // pq.popMax() // ==> 'Bob, breathing problems'
    // pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ

        it("should be an object", function() {
            expect(pq).to.be.an('Object');
        });
        describe("insert", function() {
            it("should have an insert property", function() {
                expect(pq).to.have.property('insert');
            });
            it("should take in two arguments", function() {
                let spy = sinon.spy(pq, 'insert');
                pq.insert('Dave, sprained ankle', 1);
                expect(spy.firstCall.args.length).to.deep.equal(2);
            });
            describe("should insert data into queue", function() {
                it("next should be null if it is the only item in queue", function() {
                    pq = new PriorityQueue();
                    pq.insert('Jill, concussion', 7);
                    expect(pq.first).to.deep.equal({ val: "Jill, concussion", priority: 7, next: null });
                });
                it("should point to the next priority in the queue", function() {
                    console.log('point to next: ', pq)
                    expect(pq.first.next.val).to.deep.equal({ val: "John, stomach pain", priority: 5, next: null });
                    pq.insert('Dave, sprained ankle', 1);
                    pq.insert('Bob, breathing problems', 8)
                    console.log('point to next: ', pq)
                    expect(pq.first.val).to.deep.equal('Bob, breathing problems');
                   
                });
            });
        });

        describe("peek", function() {
            it("should have a peek property", function() {
                expect(pq).to.have.property('peek');
            });
            describe("should return the value of the highest priority without removing it from the queue", function () {
                it("should return the value of the highest priority", function() {
                    expect(pq.peek()).to.deep.equal('Jill, concussion');
                })
                it("should not alter the size of the queue", function() {
                    console.log('pq length',pq.next)
                    let count = 0;
                    let current = pq;
                    while (current) {
                        current = pq.next;
                        count++;
                    }
                    console.log(count);
                    expect(count).to.deep.equal(2);
                });
            });
        });

        describe("popMax", function() {
            it("should have a popMax property", function() {
                expect(pq).to.have.property('popMax');
            });
            describe("should return the item with the highest value with the highest priority and also remove it from the priority queue", function() {
                it("should return the item with highest value with the highest priority", function() {
                    expect(pq.popMax()).to.deep.equal('Jill, concussion')
                })
                it("should remove item from priority queue", function() {
                    pq.popMax();
                    expect(pq.peek()).to.deep.equal('John, stomach pain')
                    // expect(pq.peek()).to.deep.equal({ val: "John, stomach pain", priority: 5 });
                })
            });
        });
})