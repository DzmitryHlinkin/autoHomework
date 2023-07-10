/*
1. Напишите функции, реализующие методы массивов forEach и map. 
Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
Затипизировать надо сами функции и коллбэки.
a. Создать реализацию функции forEach, получающую на вход массив слов,
 и выводящую в консоль каждый элемент массива без главных букв 
 b. Создать реализацию функции map, принимающую массив числе 1-10, возвращающую 
 новый массив, где каждый каждый элемент - это нулевой элемент исходного массива умноженный на его индекс
 */
/*
 function forEach<T>(arr: T[], callback: (value: T) => void): void {
    arr.forEach((elem) => {
      const lowercaseElem = String(elem).toLowerCase();
      callback(lowercaseElem as unknown as T); 
    });
  }

const words = ["Apple", "Banana", "Cherry"];
forEach(words, (word) => console.log(word));


function map<T>(arr: T[], callback: (value: T, index: number) => T): T[] {
    return arr.map((elem, index) => callback(elem, index));
  }

  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const multipliedNumbers = map(numbers, (number, index) => number * index);
  console.log(multipliedNumbers);
*/

 /*
 2. У нас есть интерфейс, описывающий какой объект должен отправляться в апи для эндпоинта /users.  
  Напишите функцию, которая будет генерировать объект юзера с захардкоданными/динамически создаваемыми данными, 
  а также может (но не обязана) принимать на вход объект, с теми полями юзера, которые мы бы хотели заменить в сгенерированных. 
  Динамическое создание данных в юзере можно реализовывать разными способами, а также с подключением библиотек. 
  Исходный интерфейс у вас только один, его используем и новые не пишем. 
*/

  interface IUser {
    username: string;
    password: string;
    email: string;
    role: 'user' | 'admin' | 'kotik';
    createdAt: Date;
  }
  
  function generateUser(overrides?: Partial<IUser>): IUser {
    const username = "Username";
    const password = "Password";
    const email = "example@mail.com";
    const role: IUser['role'] = 'user';
    const createdAt = new Date();
  
    return {
      username,
      password,
      email,
      role,
      createdAt,
      ...overrides, 
    };
  }
  
  
  
  const modifiedUser = generateUser({ username: "Tolian", role: "kotik", email: "dfsf@dgdg.dgdg" });
  console.log(modifiedUser);