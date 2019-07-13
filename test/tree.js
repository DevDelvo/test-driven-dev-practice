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