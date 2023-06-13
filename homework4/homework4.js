/*1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, 
которая будет принимать ваш набор названий пицц (массив) и возвращать только те, 
которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - 
вернуть null
Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  */

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzas = ['Peperoni', 'buble', 'hawai', 'okorcka']
function conkur(myPizzas) {
  
for (const pizzas of myPizzas) {
  
    if (competitorPizzas.includes(pizzas)) 
    {
        console.log("null")
    }

    else 
    {console.log(pizzas)}
  }  
}
conkur(myPizzas)


/*2. Написать функцию, которая принимает предложение (слова разделенные только 
  пробелами) в качестве параметра и выводит в консоль слово с наибольшим 
  количеством букв. 
  Если таких слов несколько - выводит их все.*/

 let input = 'dfffde ewwewggg fdgfgdfgdgdgdg fffffffffffff dgdgd' 
 //console.log(input.length)
 function longestWord() {
  const input1 = input.split(" ")
 //console.log(input1)
 const maxLength = Math.max(...input1.map(word => word.length));
 const longest = input1.filter(word => word.length === maxLength)
 console.log(longest)}
longestWord(input)
 /*longest.sort()
 console.log(longest)
 const result = [longest[0]]
 console.log(result)
 //console.log(result.length)
 for (let i = 1; i < longest.length; i++) {
  if(longest[i] === longest[0]) {
    result.push(longest[i])
  }
else if (longest[i] > longest[0])
 {result.splice(0, result.length, longest[i]);
}
 }
 console.log(result)
*/



/*3. Напишите функцию, которая принимает на вход массив чисел, 
убирает из него дубликаты и возвращает массив с только уникальными значениями.
*/
const inputNumber = [1, 2, 3, 4, 1, 3, 5, 6, 3, 7]
const resultNum = []
function unicNumbers() {
for (const number1 of inputNumber ) {
  if (!resultNum.includes(number1)) {
    resultNum.push(number1)}
  else {
    console.log(`skiped ${number1}`)
  }
}
console.log(resultNum)}

unicNumbers(inputNumber)


/*4. Написать функцию, которая принимает на вход слово и проверяет, 
является ли это слово палиндромом*/