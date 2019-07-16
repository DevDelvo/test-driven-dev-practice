// Prefix Search
// Prompt
// Given a "book" and a string to search for, return an array of the character indices for every word in the book that begins with that string.
// The book will contain two things: a book id and a string of English text. The search should be case insensitive.
// Follow-up: consider the possibility of repeated searches through the same book.

// Examples
// const book = {
//   id: 1,
//   text: `Once upon a time, there was a book with words.
//   The book had not been catalogued, but would catch the
//   eyes of onlookers nonetheless.`
// };
// findWordsStartingWith(book, 'the'); // should return [ 18, 47, 97 ]
// findWordsStartingWith(book, 'cat'); // should return [ 69, 91 ]

// Solutions
// A naive solution involves simply looping through the text. This solution is O(n * m), where n is the length of the text and m is the length of the prefix.
// Interviewees may instinctively move to use includes, substring, indexOf, or to check the prefix against a slice of the text. 
// This is fine in practice, but in an interview setting only serves to show that you happen to have read the docs, not that you understand how these methods work under the hood. 
// Steer them away from this approach and towards something like the solution below.
function findOrCreateTrie(book) {
    if (!tries.hasOwnProperty(book.id)) {
        tries[book.id] = buildTrie(book);
    }
    return trie[book.id];
}

function buildTrie(book) {
    
}
 

function findWordsStartingWith(word, prefix) {

}

module.exports = {
    findOrCreateTrie,
    buildTrie,
    findWordsStartingWith,
}