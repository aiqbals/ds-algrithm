// Write two functions that finds the factorial of any number. 
//One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) {
    if(number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number-1);
  }

  findFactorialRecursive(6);
  //O(n)

  
  function findFactorialIterative(number) {
    let answer = 1;
    if(number === 2) {
        answer = 2;
    }
    for(let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
  }
  
  findFactorialIterative(5);
  // O(n)

// Fibonacci
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let arr = [0, 1];

  for(let i = 2; i < n +1; i++){
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}
fibonacciIterative(3);
//Big O is: O(n)
  

function fibonacciRecursive(n) {
  if(n < 2) {
      return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
  
fibonacciRecursive(6)
//Big O is:if n increases, fn call increases exponentially, O(2 pow N) bad then n*n (two nested fro loop). TimeComplexity. 
// It can be solved to O(n). - Anything with recursion can be done with iteratively (loop)
// But recussion can make your code dry, more readable, simpler with extra memory(LargeStack). Not alwasy best approach. 
// Good for tree datastructure, in doing traversal, BFS, DFS
// tail call optimization - help to not increase the call stack - in JS(ES6) and LargeStack can be solved during production. 
// Devide and Conquer using Recursion