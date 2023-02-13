// Recursive Fibonacci
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// O(n) - iterative
// O(2^n) - recursive

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(6));
// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(6));

// Recursive Factorial

function factorial(n) {
  if (n === 0) return 1;
  return factorial(n - 1) * n;
}

// Big-O = O(n) - linear

console.log(factorial(5));
