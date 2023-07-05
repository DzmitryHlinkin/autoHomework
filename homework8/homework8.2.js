/*
1. Напишите функцию, которая возвращает Promise, который резолвается в сумму 
двух чисел. Функция должна принимать два аргумента (a и b) и возвращать Promise, 
который резолвает в a+b. Если какой-либо из аргументов не является числом, 
Promise должен быть rejected с сообщением об ошибке. 
Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
и обработайте любые ошибки с помощью метода .catch().
*/

/*
function sumNumbers(a, b) {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("оба аргумента должны быть числовыми");
      } else {
        resolve(a + b);
      }
    });
  }


  sumNumbers(22, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); 
  });

sumNumbers(4, "тыц")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


*/
/*
2. Создайте функцию retryPromise, которая принимает функцию и максимальное 
количество повторных попыток в качестве входных данных. 
Функция должна выполнить предоставленную функцию и вернуть обещание. 
Если обещание отклонено, оно должно повторять выполнение функции до тех пор, 
пока оно не будет зарезолвлено или не будет достигнуто 
максимальное количество попыток. Задержка каждой попытки на 1 секунду.
В качестве коллбэка напишите функцию getNumber, возвращаующую новый промис,
в котором создается рандомное число от 1 до 10.
Если число больше 5 - промис резолвается, если меньше либо равно - реджектается.
*/

/*
function retryPromise(func, maxAttempts) {
    return new Promise((resolve, reject) => {
      const retry = (attempts) => {
        func()
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            if (attempts < maxAttempts) {
              setTimeout(() => {
                retry(attempts + 1);
              }, 1000);
            } else {
              reject(error);
            }
          });
      };
      
      retry(1);
    });
  }


  function getNumber() {
    return new Promise((resolve, reject) => {
      const random = Math.floor(Math.random() * 10) + 1;
      if (random > 5) {
        resolve(random);
      } else {
        reject(`Число ${random} меньше или равно 5`);
      }
    });
  }
  
  retryPromise(getNumber, 2)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error); 
    });  
*/



/*
Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) 
Данные с сайта брать запросом используя fetch(). 
Пользователь должен иметь возможность передавать валюту и сумму денег в 
функцию и получать сумму денег в желаемой валюте на выходе. 
Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
Решить с помощью в 2 вариантах: с  .then() и с использованием async/await
  */

/*
function currencyConverter(fromCurrency, amount, toCurrency) {
    //const apiKey = '49a588adc842cac657b8f00277fabd4e';
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=49a588adc842cac657b8f00277fabd4e&format=1`;

  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
  
        console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      })
      .catch((error) => {
        console.log('Ошибка:', error);
      });
  }

  currencyConverter('USD', 4, 'BYN')
  */


  async function currencyConverter(fromCurrency, amount, toCurrency) {
    //const apiKey = '52c7216360954fed23adc9086b36118d';
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=49a588adc842cac657b8f00277fabd4e&format=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = amount * exchangeRate;
  
      console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
    }
  }

  currencyConverter('EYR', 4, 'USD')


