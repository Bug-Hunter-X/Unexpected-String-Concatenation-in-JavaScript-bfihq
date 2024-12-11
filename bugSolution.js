function foo(a, b) {
  // Explicit type conversion to number using Number()
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3 (Numerical addition) 