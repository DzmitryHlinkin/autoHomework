/*1. На вход функции подаётся предложение, например “I am the best
AQA ever!” Преобразуйте строку таким образом, чтобы вместо каждой
буквы была цифра, показывающая сколько раз эта буква встречается в
предложении. Пробелы и знаки препинания оставляем без изменения. 
Регистр не должен играть роли.*/

const sentence = "I am the best AQA ever!";
{
  const convertSentenceToLetersAmount = (sentence) => {
    let arrOflengs = [];
    let arrOfLeters = sentence.toLowerCase().split("");
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (const letter of arrOfLeters) {
      if (alpha.includes(letter)) {
        ind = arrOfLeters.filter((num) => num === letter).length;
        console.log(ind)
        arrOflengs.push(ind);
      } else {
        arrOflengs.push(letter);
      }
    }
    return arrOflengs.join("");
  };
  console.log(convertSentenceToLetersAmount(sentence));
}

const convertSentenceToLetersAmount2 = (sentence) => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  return sentence
    .toLowerCase()
    .split("")
    .map((letter, index, array) => {
      if (abc.includes(letter)) {
        return array.filter((char) => char === letter).length;
      } else {
        return letter;
      }
    }).join('')
};
console.log(convertSentenceToLetersAmount2(sentence))


let str = "I am the best AQA ever!";
let str1 = "abc , aa : bcd ; eta?";
let str2 = "";
let str3 = [2, 3];
function convertLetterToItsEntry(string) {
  if (!string || typeof string !== "string") return false;
  let result = string.toLowerCase();
  let strArray = string
    //.replaceAll(" ", "")
    .toLowerCase()
    .replaceAll(/[^a-z]/g, "")
    .split("");
  let uniqueLetters = new Set(strArray);

  uniqueLetters.forEach((symbol) => {
    let symbolCount = strArray.reduce((counter, current) => {
      if (current === symbol) {
        counter++;
      }
      return counter;
    }, 0);
    result = result.replaceAll(symbol, symbolCount);
  });

  return result;
}
console.log(convertLetterToItsEntry(str));
console.log(convertLetterToItsEntry(str1));
console.log(convertLetterToItsEntry(str2));
console.log(convertLetterToItsEntry(str3));



/*2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести 
сумму всех цен и среднюю цену товара.
Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
  */

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123]
{const calkulate = (prices) => {
let sum1 = prices.reduce((sum, prices, index, array) => {
    sum += prices
    return sum
    }, 0)
//console.log(prices.length)
const midPrice = sum1/prices.length
return `итого: ${sum1} $ средняя цена товара ${midPrice}$`

}

console.log(calkulate(prices))}


/*3. Напишите функцию, которая принимает на вход массив слов и 
возвращает отсортированный массив по по следующему критерию: 
количество гласных букв.
Массив должен быть отфильтрован по возврастанию количества гласных
букв в слове. */
const Values = ['Dmitry', 'Vladimir','Anastasia', 'Alina', 'Tatiana']
function sortByVowels(Values) {
  function countVowels(word) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
    return count;
  }
  
  return Values.sort((a, b) => countVowels(a) - countVowels(b));
}
console.log(sortByVowels(Values))



/*4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], 
количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара 
(открывающая и закрывающая).
Усложнение: в массиве могут быть вложены еще массивы на разной глубине. 
(ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами 
вложенности)
Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
Пример:
const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
*/
const arr = [[[]], '(', ')',[ ['('], '[','(', ')', ']', [')']]]
function hasBrackets(arr) {
  const stack = [];
  const flatArr = arr.flat(Infinity);
  console.log(flatArr)
  for (let i = 0; i < flatArr.length; i++) {
    if (flatArr[i] === '(' || flatArr[i] === '{' || flatArr[i] === '[') {
      stack.push(flatArr[i]);
    } else if (flatArr[i] === ')' && stack.indexOf('(') != -1 ) {
      ind = arr.indexOf('(')
      stack.pop(ind);
    } else if (flatArr[i] === '}' && stack.indexOf('{') != -1 ) {
      ind = arr.indexOf('}')
      stack.pop(ind);
    } else if (flatArr[i] === ']' && stack.indexOf('[') != -1 ) {
      ind = arr.indexOf(']')
      stack.pop(ind);
    } else {
      console.log(stack)
      return false;
    }
  }
  
  return stack.length === 0;
}

console.log(hasBrackets(arr))



