// O(n) time | O(1) space
const fib = (n) => {
    let fibs = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const next = fibs[0] + fibs[1];
        fibs[0] = fibs[1];
        fibs[1] = next;
        counter++;
    }
    return n > 1 ? fibs[1] : fibs[0];
}

// O(2^n) time | O(n) space
function fibRecursive(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibRecursive(n-1) + fibRecursive(n-2);
}

// O(n) time | O(n) space
const fibMemo = (n, memo = { 1: 0, 2: 1}) => {
   if (n in memo) {
       return memo[n] 
    } else {
    memo[n] = fibMemo(n-1, memo) + fibMemo(n - 2, memo);
    return memo[n];
   }
}

module.exports = {
    fib,
    fibRecursive,
    fibMemo,
}