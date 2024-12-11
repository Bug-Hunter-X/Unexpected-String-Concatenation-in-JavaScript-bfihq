# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript stemming from its loose typing system. When performing arithmetic operations with a mix of number and string data types, JavaScript might perform string concatenation instead of numerical addition, leading to unexpected results.

## Bug Description
The `foo` function is expected to add two numbers. However, due to the loose typing nature of JavaScript, when a number and a string are used as operands, JavaScript will perform string concatenation rather than numerical addition.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript runtime such as Node.js or in a web browser's console.

## Solution
The `bugSolution.js` file shows how to resolve this issue by explicitly converting the string to a number before performing the arithmetic operation.