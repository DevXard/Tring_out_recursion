// memoization
// js object wil be args to fn, value will be the return value

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    console.log(memo)
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(5))