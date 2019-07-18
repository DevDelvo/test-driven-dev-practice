const { findOrCreateTrie, buildTrie, findWordsStartingWith } = require('../data-structures/trie');
const { expect } = require('chai');
const sinon = require('sinon');

describe("Trie tests", function() {
    const book = {
        id: 1,
        text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`
        };
        let tries = {};
    describe.skip("findOrCreateTrie", function() {
        it("builds a trie if it does not exist", function() {
            expect(tries).to.deep.equal({});
            findOrCreateTrie(book, tries);
            // expect(tries).to.have.property("1").that.is.an("object");
            // expect(trie).to.deep.equal()
        });
        it("returns an existing trie if it already exists", function() {
            // expect(tries[1]).to.have.property("a").that.is.an("object");
        });
    });
    describe.skip("buildTrie", function() {
        let trie;
        beforeEach(function () {
            trie = buildTrie(book);
        })
        it("returns an object with letters as the keys", function() {
            // let trie = buildTrie(book);
            expect(trie).to.have.property("a");
        });
        it("returns an object an array of indexes as the values", function() {
            expect(trie["a"]).to.have.property
        });
    });
    describe("findWordsStartingWith", function() {
        // let tries = {};
        const spy = sinon.spy(findWordsStartingWith);
        beforeEach(function() {
            tries = findOrCreateTrie(book);
        });
        it("takes in a book as its first argument", function() {
            spy(book, "the");
            expect(spy.firstCall.args[0]).to.deep.equal(book);
        });
        it("takes in a string prefix as its second value", function() {
            spy(book, "the");
            expect(spy.firstCall.args[1]).to.deep.equal("the");
        });
        it("returns the starting indices of the target word within the given book", function() {
            expect(findWordsStartingWith(book, "the")).to.deep.equal([18, 49, 99]);
            expect(findWordsStartingWith(book, 'cat')).to.deep.equal([ 71, 93 ]);
        });
    });
});