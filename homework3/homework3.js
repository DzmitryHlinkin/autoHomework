//1. Написать скрипт, переводящий количество байт в нужные единицы
let bytes = prompt("How old are you?(only num)");
//bytes = String(bytes)
if(bytes.length>=1)
{
bytes = isNaN(bytes) ? false : +bytes;
if (bytes || bytes===0 ) {
let round = 1
let size = bytes/1024
while (size > 1024) {
size = size / 1024
round++
   
}
switch( round) {
 case 1 :
 round = 'kb';
  break;
   case 2 :
   round = 'Mb';
   break;
   case 3:
   round = 'Gb'
   break;
   case 4:
   round = 'Tb'
  break;
  default:
 round = 'dofiga'
  
  break;  
  }  
{    
alert(size.toFixed(1) + round )
}}
else {alert("only num!")} 
}
else {alert("only num2!")}



//2. Написать скрипт, который выведет 5 строк в консоль 
//таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
const smile = ':)'
let smile2 = ''
let i = 0
while(i<6) {
  console.log(`${smile2}`)
  i = i+1
  smile2 = `${smile2}` + `${smile}`
}


//Сделать из "*" равнобедренный треугольник
const smile = ':)'
let m = '     '
let smile2 = ':)'
let n = ''
let i = 0
console.log( `${m}  ${smile2}`)
while(i<5) {
  //console.log( `${m}  ${smile2}`)
  m = m.replace(' ', '')
  i = i+1
  smile2 =`${smile2}${smile}`
  console.log( `${m}  ${smile2}`)
}
//ромб
const smile = ':)'
let m = '        '
let smile2 = ':)'
let n = '   '
let i = 0
console.log(`${m}${smile2}`)
while(i<5) {
  //console.log( `${m}  ${smile2}`)
  m = m.replace(' ','')
  i = i+1
  smile2 =`${smile2}${smile}`
  console.log(`${m}${smile2}`)
}
while (i>= 0) {
  smile2 = smile2.replace(':)',' ')
  i=i-1
  console.log(`${n}${smile2}`)
}

//3. Вам нужно вывести в консоль числа от 1 до 100.
//Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//Если число делится и на 3 и на 5 без остатка, то то выведете в консоль 
//“число - делится и на 3 на 5”.
//Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
let a = 0
for(let i = 0; i < 100; i++) {
  ++a
  //console.log(a)
  let ost = a % 3
  let ost1 = a % 5
  //console.log(ost)
  if (ost === 0 && ost1 === 0){
    console.log(a + ' - делится без остатка на 3 и на 5')
  }
  else if(ost === 0) {
    console.log(a + ' - делится без остатка на 3')}
  else if (ost1 === 0){
    console.log(a + ' - делится без остатка на 5')
  }
  else
  console.log(a)
}

//4. Написать скрипт, который преобразует любое предложение в camelCase. 
//Первое слово должно начинаться с буквы в нижнем регистре, 
 // у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
{
 let text = 'dsdsdsdT httt ytt uttt'
 let index = text.indexOf(' ')
 let word = ''
 let result = ''
 //let index1 = index
 //console.log(index)
 while(index>=0) {
 word = text.slice(0, index)
 text = text.slice(index +1)
 index = text.indexOf(' ')
 //result += result 
 if (result) {result += word[0].toUpperCase() + word.slice(1).toLowerCase()}
 else {result += word[0].toLowerCase() + word.slice(1).toLowerCase() 
 }
 word = ''
 if(index === -1) {result += text[0].toUpperCase() + text.slice(1).toLowerCase()}
 
 
 }
console.log(result)
}

 {let str = 'AAa bB вывывывb ccC ddD'
 let result = ''
 let word = ''
for(let i=0; i<str.length + 1; i++) {
 
 
 if(str[i] !== ' ' && str[i]) {
    
   word += str[i]
 } else {
   
  result += result
   ? word[0].toUpperCase() + word.slice(1).toLowerCase()
   : word[0].toLowerCase() + word.slice(1).toLowerCase()
   word = ''
  }
 }
 console.log(result)
}

let str = 'abc'
console.log(str[0].toUpperCase())
console.log(str[1])
console.log(str[2])
console.log(str[3])

