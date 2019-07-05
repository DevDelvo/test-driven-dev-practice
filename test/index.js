const assert = require('assert');
const { expect } = require('chai');
const { should } = require('chai').should();

const { stringSearch } = require("../big-o/stringSearch");
const { dictionaryWordFinder } = require("../big-o/dictionayWordFinder");

// describe("Basic Mocha String Test", function() {
//     it('should return number of characters in a string', function() {
//         assert.equal("Hello".length, 4);
//     });

//     it('should return first character of the string', function() {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// })

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
    describe('', function() {
        it('', function() {

        });
    });
});