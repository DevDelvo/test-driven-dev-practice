const assert = require('assert');
const { expect } = require('chai');
const { should } = require('chai').should();

describe("Basic Mocha String Test", function() {
    it('should return number of characters in a string', function() {
        assert.equal("Hello".length, 5);
    });

    it('should return first character of the string', function() {
        assert.equal("Hello".charAt(0), 'H');
    });
})

// describe("String Search", function() {
//     it('should return the index of the first appearance of one string(needle) inside of another (the haystack).', function() {

//     });
// });
