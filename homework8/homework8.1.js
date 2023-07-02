/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, 
которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
*/

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
  }
  function callbackFunction() {
    console.log("2 секунды!");
  }
  
  delayTwoSeconds(callbackFunction);

/*
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. 
Обработайте промис методом .then и выведите результат его резолва в консоль
*/
const myPromise = new Promise((resolve, reject) => {
    resolve(1);
  });
  
  myPromise.then(result => {
    console.log(result);
  });

  /*
  3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
  */

  const promise = new Promise((resolve, reject) => {
    reject("failed");
  });
  
  promise.catch((error) => {
    console.log(error);
  });


  /*
  4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
  */

  function promiseNumber(number) {
    return new Promise((resolve, reject) => {
      resolve(number);
    });
  }

  promiseNumber(69)
  .then((result) => {
    console.log(result);
  });


  /*
  5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
   обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса
  */

   Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  });