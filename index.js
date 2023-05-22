
'use strict';

let firstVariable = 1;
firstVariable = 2;
firstVariable = 'Privet';
const MY_AGE = 32
// MY_AGE = 31
console.log('Privet');
console.log(firstVariable);
console.log(MY_AGE);

let firstVariableInTheProject = 0
let first_variable_in_the_project = 1

//Primitives
//number
let num = 1 // от -(2**53 - 1) до (2**53 -1)

//bigInt
const bigInt = 1234567890123456789012345678901234567890n;

//string 
let stringWithSingleQuotes = 'Hello, Dima'
let stringWithDoubleQuotes = "Hello, Dima"
let backQuotes = `Hello, Dima`
let stringNumber = ''

//boolean
let trueBoolean = true
let falseBoolean = false

//null
let nullVariable = null

//undefined
let undefinedVariable = undefined

//Structured
//object
let dmitry = {
  name: 'Dima',
  age: 46,
  hobby: 'fishing'
}

//Symbol
const id = Symbol('123')
console.log(id === id)

//Преобразования типов
//To string
let numberValue = 1;
console.log(typeof numberValue); //1

// numberValue = String(numberValue);
numberValue = '' + numberValue;
console.log(numberValue); //'1'
console.log(typeof numberValue); //'1'

let booleanValue = true;
console.log(typeof booleanValue); //true
booleanValue = String(booleanValue);
console.log(typeof booleanValue); // 'true'

//to Number
let stringOnlyDigits = '123'
stringOnlyDigits = Number(stringOnlyDigits)
console.log(stringOnlyDigits)
console.log(typeof stringOnlyDigits)

let stringWithChars = '123 !@$'
stringWithChars = Number(stringWithChars) //NaN = Not a Number
console.log(stringWithChars)
const isNotAnumber = isNaN(stringWithChars)
console.log(isNotAnumber)

let value = Number(undefined)
console.log(value)
console.log(Number(false))

// undefined => NaN
// null => 0
// true => 1
// false => 0
// string => 0, number, NaN

//to Boolean 
let convertedToBoolean = Boolean("false")
console.log(convertedToBoolean)

//falsy value:
// 0
// ""
// null
// undefined
// NaN


//Operators
//Unary
let x = 1
x = -x
console.log(x)

let y = '123'
y = +y
console.log(y);
//Binary
//numbers
let sum = 1 + 2
let substuction = 1 - 2
let divide = 4 / 2
let miltiply = 4 * 2
let squared = Math.sqrt(4)
let powered = 2 ** 3
let divisionPart = 8 % 8
console.log(sum);
console.log(substuction);
console.log(divide);
console.log(miltiply);
console.log(squared);
console.log(powered);
console.log(divisionPart);



//strings
let name = 'Dima'
let surname = 'Hlinkin'

let fullName = name - surname

console.log(fullName)

const question = "1" + 1
const question2 = 1 + 1 + "1"
console.log(question)

const quiz = 'b' + 'a' + +'a' + 'a'
console.log(quiz)

let counter = 0;
counter = counter + 1;
counter += 1;
counter *= 1;
counter /= 1;
counter -= 1;
let power = 2
power **= 3
console.log(power)

//increment decrement
let count = 0;
count++;
count++;
count--;
--count;
console.log(count)

let num1 = 1
// num1++
let incrementedNum = ++num1
console.log(incrementedNum)