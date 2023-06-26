 /*
 1. Создайте функцию counter с переменной cosnt count = 0. 
 Реализуйте замыкание так, чтобы при вызове функции count увеличиваться на +1 
и выводился в консоль в виде `Function was called ${count} times`
*/
 const closure = (count = 0) => {
  return () => {
    ++count;
    return `Function was called ${count} times`
   }
 }

 const counter = closure(5)
 console.log(counter())


 /*
 2. Создайте класс User с публичной пропертей name и приватным полем surname, 
 а также методом sayHi() возвращающим "Hello from <name>".
 */

class User  {
name = 'Toliyan';
_surname = 'Kotejnok';

sayHi() {return `Hello from ${this.name}`}
}
const user1 = new User()
console.log(user1.sayHi())


 /*
 3. Создать объект из класса User и вывести результат метода sayHi() в 
 консоль
 */
/*
4. Создать объект из класса User и вывести surname в консоль (получить ошибку)
*/
 class User  {
    constructor(name, surname) {
     this.name = name;
     this.surname = surname;
    }
    sayHi() {return `Hello from ${this.name}`}
    stop() {
      throw new Error('Не рыбак')
    }
    }
    const user2 = new User('Tolia', 'Kotejnok')
    console.log(user2.stop())




