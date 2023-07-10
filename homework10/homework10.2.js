"use strict";
/*
1. Напишите функции, реализующие методы массивов forEach и map.
Функции принимают на вход массив и колбэк. Используйте дженерик типы.
Затипизировать надо сами функции и коллбэки.
a. Создать реализацию функции forEach, получающую на вход массив слов,
 и выводящую в консоль каждый элемент массива без главных букв
 b. Создать реализацию функции map, принимающую массив числе 1-10, возвращающую
 новый массив, где каждый каждый элемент - это нулевой элемент исходного массива умноженный на его индекс
 */
function forEach(arr, callback) {
    arr.forEach((elem) => {
        const lowercaseElem = String(elem).toLowerCase();
        callback(lowercaseElem);
    });
}
const words = ["Apple", "Banana", "Cherry"];
forEach(words, (word) => console.log(word));
function map(arr, callback) {
    return arr.map((elem, index) => callback(elem, index));
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipliedNumbers = map(numbers, (number, index) => number * index);
console.log(multipliedNumbers);
