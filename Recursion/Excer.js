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
    //code here;
  }
  fibonacciIterative(3);
  
  function fibonacciRecursive(n) {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    if(n === fibonacci[n]) {
        return fibonacci[n];
    }
  }
  
  fibonacciRecursive(3)
