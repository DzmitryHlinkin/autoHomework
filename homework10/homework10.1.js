"use strict";
/*
1. Задание: Создайте универсальную функцию с именем findMaxKeysValue,
которая принимает массив объектов и возвращает объект с максимальным количеством
пар ключ\значение из этого массива. Ниже приведен пошаговый алгоритм, котором вам нужно следовать.
*/

const objects = [
    { a: 1, b: 'two', c: true },
    { x: 'hello', y: 42 },
    { alpha: 'foo', beta: 'bar', gamma: 'baz', gggg: 'dddd' },
]; 
function findMaxKeysValue(arr) {
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

console.log(findMaxKeysValue(objects))