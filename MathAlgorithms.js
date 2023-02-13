function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// function isPowerOfTwo(n) {
//   if (n < 1) return false;
//   while (n > 1) {
//     if (n % 2 !== 0) return false;
//     n /= 2;
//   }
//   return true;
// }

function isPowerOfTwo(n) {
  return n < 1 ? false : (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(22));
