const { PriorityQueue } = require('../data-structures/priorityQueue');
const { expect } = require('chai');

describe("Priority Queue", function() {
    const pq = new PriorityQueue();

        it("should be an object", function() {
            expect(pq).to.be.an('Object');
        });

        describe("insert", function() {
            it("should take in two arguments", function() {

            });
            it("should insert data into queue", function() {

            });
        });

        describe("peek", function() {
            describe("should return the value of the highest priority without removing it from the queue", function () {
                it("should return the value of the highest priority", function() {
                    
                })
                it("should not alter the size of the queue", function() {

                });
            });
        });

        describe("popMax", function() {
            describe("should return the item with the highest value with the highest priority and also remove it from the priority queue", function() {
                it("should return the item with highest value with the highest priority", function() {

                })
                it("should remove item from priority queue", function() {

                })
            });
        });
})