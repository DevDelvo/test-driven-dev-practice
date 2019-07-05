// Interviewer Prompt
// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by - [definition].

// const dictionary = [
//   'a - Used when mentioning someone or something for the first time in a text or conversation',
//   'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
//   'be - Exist',
//   'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
//   'of - Expressing the relationship between a part and a whole',
//   'that - Used to identify a specific person or thing observed or heard by the speaker',
//   'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
//   'to - Expressing motion in the direction of (a particular location)'
// ];
// definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined

// Interviewer Guide
// Primary focuses
//  Time / space complexity analysis
// Binary search
//  Indexing / caching (for repeated executions)
// Complexity analysis
//  Push your candidate to analyze the time and/or space complexity
//  Do so when they're going over a possible approach
//  ...but leave them an option to cover it later
// Binary search
//  If your candidate quickly comes up with the naive solution, push them to come up with other approaches
//  ...before they start implementing the naive approach
//  If they don't come up with binary search, suggest it
// Indexing / caching
//  Probably only worth covering this after the candidate has successfully implemented binary search
//  ...so you probably will not get to this

// Binary search solution
// O(1) space | O(log n) time
function dictionaryWordFinder(word, dictionary) {
    let start = 0;
    let end = dictionary.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor(end - start / 2);
        if(dictionary[mid].startsWith(word + " - ")) return dictionary[mid].slice(word.length + 3);
        if (word < dictionary[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

// Caching solution
// O(n) space | O(1) time
// function dictionaryWordFinder(word, dictionary) {
//     const map = dictionaryCreator(dictionary);

//     return map[word];
// }

// function dictionaryCreator(dictionary) {
//     const map = {};
//     for (const entry of dictionary) {
//         const [word, definition] = entry.split(' - ');
//         map[word] = definition;
//     }
//     console.log(map)
//     return map;
// }

module.exports = {
    dictionaryWordFinder
}