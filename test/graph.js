const { doesPathExist } = require('../data-structures/graph');
const { expect } = require('chai');
const sinon = require('sinon');

describe("Graph tests", function() {
    let graph, spy1, spy2, spy3, spy4;
    const spy = sinon.spy(doesPathExist);
    beforeEach(function() {
        graph = {
            a: ['a', 'c'],
            c: ['r', 's'],
            r: ['a'],
            s: []
          }
        spy(graph, 'a', 'a');
        spy2 = spy(graph, 'c', 'c');
        spy3 = spy(graph, 'r', 's');
        spy4 = spy(graph, 's', 'a');
    });

    it("takes in a graph as its first argument", function() {
        expect(spy.firstCall.args[0]).to.deep.equal(graph);
        expect(spy.firstCall).to.be.a("object")
    });
    it("takes a start and an end point as its 2nd and 3rd agruments", function() {
        expect(spy1.calledWith(graph, 'a', 'a')).to.be.true;
    });
    it("returns true when start is 'a' and end is 'a'.", function() {
        expect(spy1.returned(true)).to.be.true;
    });
    it("returns true when start is 'c' and end is 'c'.", function() {
        expect(spy2.returned(true)).to.be.true;
    });
    it("returns true when start is 'r' and end is 's'.", function() {
        expect(spy3.returned(false)).to.be.true;
    });
    it("returns true when start is 's' and end is 'a'.", function() {
        expect(spy4.returned(true)).to.be.true;
    });
});