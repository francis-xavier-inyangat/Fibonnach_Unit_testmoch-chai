// Code pair Jonah
function listFibonacci(fibonachNum) {
   
    for (var fibonacci = [0, 1], i = 1; i < fibonachNum; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
  }
  
  console.log(  listFibonacci(3)  )

  module.exports = listFibonacci;