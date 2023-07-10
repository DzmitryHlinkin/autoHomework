/*
1. Задание: Создайте универсальную функцию с именем findMaxKeysValue, 
которая принимает массив объектов и возвращает объект с максимальным количеством
пар ключ\значение из этого массива. Ниже приведен пошаговый алгоритм, котором вам нужно следовать.
*/


const objects: Record<string, Primitives>[] = [
  { a: 1, b: 'two', c: true },
  { y: 45, x: 'hello', t: 45, g: false },
  { alpha: 'foo', beta: 'bar', gamma: 'baz', ttt: 'vxcvx', dffdf: "fdfd" },
]
type Primitives = string | number | boolean

function findMaxKeysValue<T extends Record<string, string | number | boolean>>(arr: T[]): T {
    if (arr.length === 0) {
      throw new Error('Массив пуст');
    }
  
    let resultObject = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const currentObject = arr[i];
      if (Object.keys(currentObject).length > Object.keys(resultObject).length) {
        resultObject = currentObject;
      }
    }
  
    return resultObject;
  }


console.log(findMaxKeysValue(objects)); 