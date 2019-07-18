const { node, tree, breadthFirst, depthFirstPreOrder, depthFirstPostOrder } = require('../data-structures/tree'); 
const { expect } = require('chai');
const sinon = require('sinon');


describe.skip("Tree tests", function() {
    let a, b, c, d, e, f, g, h, i , j, k, l, m
    beforeEach(function() {
        a = node('a');
        b = node('b');
        c = node('c');
        d = node('d');
        e = node('e');
        f = node('f');
        g = node('g');
        h = node('h');
        i = node('i');
        j = node('j');
        k = node('k');
        l = node('l');
        m = node('m'); 
        a.children.push(b,c,d);
        b.children.push(e);
        e.children.push(k,l);
        c.children.push(f,g,h);
        h.children.push(m);
        d.children.push(i,j);
    });
    describe("Node", function(){
        it("takes in a string value and sets the value property to that value", function() {
            expect(a).to.have.property("value").that.is.an("string").that.deep.equals('a');
            expect(b).to.have.property("value").that.is.an("string").that.deep.equals('b');

        });
        it("has a children property and it is an array that can have values pushed into it", function() {
            expect(a).to.have.property("children").that.is.an("array").that.deep.equal([
                {value: "b", children: [
                    {value: "e", children: [
                        {value: "k", children: [] }, 
                        {value: "l", children: []}
                    ]}
                ]}, 
                {value: "c", children: [
                    {value: "f", children: []},
                    {value: "g", children: []},
                    {value: "h", children: [
                        {value: "m", children: []}
                    ]}
                ]}, 
                {value: "d", children: [
                    {value: "i", children: [] }, 
                    {value: "j", children: []}
                ]}
            ]);
            expect(b).to.have.property("children").that.is.an("array").that.deep.equal([
                {value: "e", children: [
                    {value: "k", children: [] }, 
                    {value: "l", children: []}
                ]}
            ]);
            expect(m).to.have.property("children").that.is.an("array").that.deep.equals([]);
            expect(d).to.have.property("children").that.is.an("array").that.deep.equals([
                {value: "i", children: [] }, {value: "j", children: []}
            ]);
        });
    });

    describe("iterator functions", function() {
        const cb = () => {
            return true;
        }
        it("takes in a starting node as the first argument", function() {
            const spy = sinon.spy(breadthFirst);
            const spy2 = sinon.spy(depthFirstPreOrder);
            const spy3 = sinon.spy(breadthFirst);
            spy(a, cb);
            spy2(a, cb);
            spy3(a, cb);
            expect(spy.firstCall.args[0]).to.deep.equal(a);
            expect(spy2.firstCall.args[0]).to.deep.equal(a);
            expect(spy3.firstCall.args[0]).to.deep.equal(a);
        });
        it("They take in a call back as a second argument", function() {
            const spy = sinon.spy(breadthFirst);
            const spy2 = sinon.spy(depthFirstPreOrder);
            const spy3 = sinon.spy(breadthFirst);
            spy(a, cb);
            spy2(a, cb);
            spy3(a, cb);
            expect(spy.firstCall.args[1]).to.deep.equal(cb);
            expect(spy2.firstCall.args[1]).to.deep.equal(cb);
            expect(spy3.firstCall.args[1]).to.deep.equal(cb);
        });

        describe("breadthFirst", function() {
            it("should log out the values in order", function() {
                const test = [];
                breadthFirst(a, (val) => test.push(val));
                const breadthFirstRes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
                expect(test).to.deep.equal(breadthFirstRes);
                });
        });

        describe("depthFirstPreOrder", function() {         
            it("should log out the children nodes before printing the sibling nodes", function() {
                const test = [];
                depthFirstPreOrder(a, (val) => test.push(val));
                const depthFirstPreOrderRes = ["a", "b", "e", "k", "l", "c", "f", "g", "h", "m", "d", "i", "j"];
                expect(test).to.deep.equal(depthFirstPreOrderRes);
            });
        });

        describe("depthFirstPostOrder", function() {
            it("should not traverse the node until all of its children are reached", function() {
            const test = [];
            depthFirstPostOrder(a, (val) => test.push(val));
            const depthFirstPostOrderRes = ["k", "l", "e", "b", "f", "g", "m", "h", "c", "i", "j", "d", "a"];    
            expect(test).to.deep.equal(depthFirstPostOrderRes);
            });
        });        
    });
});