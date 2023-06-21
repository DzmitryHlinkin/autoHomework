const characters = [
    { name: 'Barney', age: 36 },
    { name: 'Fred', age: 40 },
    { name: 'Jack', age: 50 }
  ];


  /*1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта*/

  /*characters.forEach(function(character) {
    Object.keys(character).forEach(function(key) {
        console.log(key);
      });
    })
    */
/*
    characters.forEach((character) => {
        Object.keys(character).forEach((key) => {
            console.log(key);
        });
    });

*/

/*2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта

characters.forEach((character) => {
    Object.values(character).forEach((key) => {
        console.log(key);
    });
});
*/
/*3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
*/
/*
characters.forEach(function(character) {
    for (const [key, value] of Object.entries(character)) {
      console.log(`key = ${key}, value = ${value}`);
    }
  });
*/
/*4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
   Перебирать каждый объект циклом for..in
   */

characters.forEach(function(character) {
    for (const key in character) {
      const value = character[key]
      console.log(`key = ${key}, value = ${value}`);
    }
  });

  /*characters.forEach(function(character) {
    for (const key in character) {
      console.log(`key = ${key}, value = ${character[key]}`);
    };
  });
*/

/*5. Создайте объект qa с полями name, age, salary и методом getInfo,
 который будет возвращать строку вида: 
   `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. 
   Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
   */



function getInfo() {
   return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`
}

const qa = [
  { name: 'Barney', age: 36, salary: 1000, getInfo},
  { name: 'Fred', age: 40, salary: 2000, getInfo},
  { name: 'Jack', age: 50, salary: 100, getInfo}
];


const greeting = qa.forEach(function(info) {
 console.log(info.getInfo())
})




