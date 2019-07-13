const { node, tree, breadthFirst, depthFirstPreOrder, depthFirstPostOrder } = require('../data-structures/tree'); 
const { expect } = require('chai');
const sinon = require('sinon');


describe("Tree tests", function() {
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
    console.log(a)
    describe("Node", function(){
        it("takes in a string value and sets it to the value as a string", function() {
            expect(a.value).to.be.equal('a');
            expect(b.value).to.be.equal('b');

        });
        it("has a children property and it is an array", function() {

        });
        it("can push in values into their children array", function() {

        });
    });

    describe("iterator functions", function() {
        it("takes in a starting node as the first argument", function() {

        });
        it("They take in a call back as a second argument", function() {

        });

        describe("breadthFirst", function() {
        });

        describe("depthFirstPreOrder", function() {

        });

        describe("depthFirstPostOrder", function() {

        });        
    });
});