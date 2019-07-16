const { findOrCreateTrie, buildTrie, findWordsStartingWith } = require('../data-structures/trie');
const { expect } = require('chai');
const sinon = require('sinon');

describe("Trie tests", function() {
    beforeEach(function() {
        const book = {
        id: 1,
        text: `Once upon a time, there was a book with words.
        The book had not been catalogued, but would catch the
        eyes of onlookers nonetheless.`
        };
    })
    describe("findOrCreateTrie", function() {
        it("builds a trie if it does no exist", function() {

        });
        it("returns an existing trie if it already exists", function() {

        });
    });
    describe("buildTrie", function() {
        it("", function() {
            
        });
    });
    describe("findWordsStartingWith", function() {
        it("takes in a book as its first argument", function() {

        });
        it("takes in a string prefix as its second value", function() {

        });
    });
});