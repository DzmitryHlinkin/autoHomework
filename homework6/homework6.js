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





/*const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  /*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
  Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

