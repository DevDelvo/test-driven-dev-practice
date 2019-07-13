const { node, tree, breadthFirst, depthFirstPreOrder, depthFirstPostOrder } = require('../data-structures/tree'); 
const { expect } = require('chai');
const sinon = require('sinon');


describe("Tree tests", function() {
    beforeEach(function() {
        var a = node('a');
        var b = node('b');
        var c = node('c');
        var d = node('d');
        var e = node('e');
        var f = node('f');
        var g = node('g');
        var h = node('h');
        var i = node('i');
        var j = node('j');
        var k = node('k');
        var l = node('l');
        var m = node('m'); 
        a.children.push(b,c,d);
        b.children.push(e);
        e.children.push(k,l);
        c.children.push(f,g,h);
        h.children.push(m);
        d.children.push(i,j);
    });

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