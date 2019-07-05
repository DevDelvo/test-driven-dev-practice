const assert = require('assert');
const { expect } = require('chai');
const { should } = require('chai').should();

const { stringSearch } = require("../big-o/stringSearch");
const { dictionaryWordFinder } = require("../big-o/dictionaryWordFinder");

describe("String Search", function() {
    describe('should return the index of the first appearance of one string (the needle) inside of another (the haystack).', function() {
        it('should return 7 when the needle is \'or\' and the haystack is \'helloworld\'', function() {
            expect(stringSearch('or', 'hello world')).to.deep.equal(7);
        });
        it('should return 6 when the needle is \'oox\' and the haystack is \'ooboxooxo\'', function() {
            expect(stringSearch('oox', 'ooboxoooxo')).to.deep.equal(6);
        });
    });
    describe('should return -1 if the needle is not inside of the haystack).', function() {
        it('should return -1 when the needle is not inside the haystack', function() {
            expect(stringSearch('hello world', 'or')).to.deep.equal(-1);
            expect(stringSearch('howdy', 'hello world')).to.deep.equal(-1);
        });
    });
});

describe("Dictionary Word Finder", function() {
    const dictionary = [
        'a - Used when mentioning someone or something for the first time in a text or conversation',
        'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
        'be - Exist',
        'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
        'of - Expressing the relationship between a part and a whole',
        'that - Used to identify a specific person or thing observed or heard by the speaker',
        'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
        'to - Expressing motion in the direction of (a particular location)'
      ];

    describe('Given an alphabetical array of dictionary entries and a word to search for, find that word\'s definition (if it exists). A dictionary entry is just a string where the word\'s name appears first, followed by - [definition].', function() {
        it('should return \'Exist\' when word is \'be\'', function() {
            expect(dictionaryWordFinder('be', dictionary)).to.deep.equal('Exist');
        });
        it('should return \'Used to identify a specific person or thing observed or heard by the speaker\' when word is \'that\'', function() {
            expect(dictionaryWordFinder('that', dictionary)).to.deep.equal('Used to identify a specific person or thing observed or heard by the speaker');
        });
        it('should return \'Expressing motion in the direction of (a particular location)\' when word is \'to\'', function() {
            expect(dictionaryWordFinder('to', dictionary)).to.deep.equal('Expressing motion in the direction of (a particular location)');
        });
    });

    describe('If word doesn\'t exist, it should return undefined', function() {
        it('should return undefined when word is wizbing', function() {
            expect(dictionaryWordFinder('wizbing', dictionary)).to.deep.equal(undefined);
        });
    });
});