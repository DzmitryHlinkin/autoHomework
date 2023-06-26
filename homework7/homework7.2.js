/*
1. Создайте функцию, принимающую число n, которая при каждом вызове будет 
генерировать случайное число [1 - n] включительно. 
Условие - каждый следующий вызов должен давать новое число 
(не встречавшееся в прошлых вызовах). 
И так пока не переберутся все n чисел. На n + 1 вызов и 
далее функция должна возвращать 'All numbers were received'. 
Задачу решить через замыкания
Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 
'All numbers were received'
    */

function randomGenerator(n) {
    var usedNumbers = []; 
    
    function generateRandom() {
      if (usedNumbers.length === n) { 
        return 'All numbers were received';
      }
      
      var randomNum = Math.ceil(Math.random() * n); 
      
      while (usedNumbers.includes(randomNum)) { 
        randomNum = Math.ceil(Math.random() * n);
      }
      
      usedNumbers.push(randomNum); 
      
      return randomNum;
    }
    
    return generateRandom; 
  }
  
  
  var randomFunc = randomGenerator(5);
  
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 