const assert = require('assert');
const { expect } = require('chai');
const { should } = require('chai').should();

const { stringSearch } = require("../big-o/stringSearch");

// describe("Basic Mocha String Test", function() {
//     it('should return number of characters in a string', function() {
//         assert.equal("Hello".length, 4);
//     });

//     it('should return first character of the string', function() {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// })

describe("String Search", function() {
    it('should return the index of the first appearance of one string (the needle) inside of another (the haystack).', function() {
        expect(stringSearch('or', 'helloworld')).to.deep.equal(7);
        expect(stringSearch('oox', 'ooboxoooxo')).to.deep.equal(6);
    });
    it('should return -1 when the needle is not inside the haystack', function() {
        expect(stringSearch('hello world', 'or')).to.deep.equal(-1);
        expect(stringSearch('howdy', 'hello world')).to.deep.equal(-1);
    });
});
