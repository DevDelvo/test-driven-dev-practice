const { findOrCreateTrie, buildTrie, findWordsStartingWith } = require('../data-structures/trie');
const { expect } = require('chai');
const sinon = require('sinon');

describe.skip("Trie tests", function() {
    const book = {
        id: 1,
        text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
    };

    const book2 = {
        id: 2,
        text: `The Big Red Doggo. There he is. He is big and red.`
    };

    // let tries = {};
    describe("findOrCreateTrie", function() {
        it("builds a trie if it does not exist", function() {
            let tries = {};
            expect(tries).to.deep.equal({});
            findOrCreateTrie(book);
            console.log("tries", tries);
            expect(tries).to.have.property("1").that.is.an("object");
            // expect(trie).to.deep.equal()
        });
        it("returns an existing trie if it already exists", function() {
            // expect(tries[1]).to.have.property("a").that.is.an("object");
        });
    });
    describe("buildTrie", function() {
        let trie, trie2;
        beforeEach(function () {
            trie = buildTrie(book.text);
            trie2 = buildTrie(book2.text);
        })
        it("returns an object with letters as the keys", function() {
            // let trie = buildTrie(book);
            expect(trie).to.have.property("a");
            expect(trie2).to.have.property("t");
        });
        it("returns an object with a property called indexes which is an array of indexes as the value", function() {
            expect(trie["a"]).to.have.property("indexes").that.is.an("array");
            expect(trie["t"]).to.have.property("indexes").that.is.an("array");
            expect(trie["a"].indexes).to.deep.equal([10, 28]);
            expect(trie["t"].indexes).to.deep.equal([12, 18, 47, 97]);
        });
    });
    describe("findWordsStartingWith", function() {
        const spy = sinon.spy(findWordsStartingWith);
        // beforeEach(function() {
        //     tries = findOrCreateTrie(book);
        // });
        it("takes in a book object as its first argument", function() {
            spy(book, "the");
            expect(spy.firstCall.args[0]).to.deep.equal(book);
            expect(spy.firstCall.args[0]).to.be.a("object");
        });
        it("takes in a string prefix as its second value", function() {
            spy(book, "the");
            expect(spy.firstCall.args[1]).to.deep.equal("the");
            expect(spy.firstCall.args[1]).to.be.a("string");
        });
        it("returns the starting indices of the target word within the given book", function() {
            expect(findWordsStartingWith(book, "the")).to.deep.equal([18, 47, 97]);
            expect(findWordsStartingWith(book, 'cat')).to.deep.equal([69, 91]);
            expect(findWordsStartingWith(book2, 'the')).to.deep.equal([0, 19]);
        });
    });
});