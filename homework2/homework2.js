//Task 1. Работа с оператором IF:
//const age = 10;
//const age_2 = 18;
//const age_3 = 60;
//if (age < age_2) {
//  console.log(
  //  "You don’t have access cause your age is " +
   //   age +
     // ". It’s less then " +
   //   age_2 +
  //    "."
//  );
//} else if (age >= age_2 && age < age_3) {
  //console.log("Welcome!");
//} else if (age > age_3) {
  //console.log("Keep calm and look Culture channel");
//} else {
//  console.log("Technical work");
//}

//Task 2*. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных.
//И если он не number - кидалась ошибка в консоль.
//Вывести в консоль результат работы функции с возрастами 17, 18, 61, "2", "aaa"

//const age = '10';
//const age_2 = 18;
//const age_3 = 60;
//if (typeof age === "number") {
//if (age < age_2) {
//console.log(
//   "You don’t have access cause your age is " +
//    age +
//  ". It’s less then " +
//age_2 +
//      "."
//  );
//  } else if (age >= age_2 && age < age_3) {
//  console.log("Welcome!");
//} else if (age > age_3) {
//  console.log("Keep calm and look Culture channel");
// } else {
//   console.log("Technical work");
// }
//} else {
// console.log("ty che bukvy suda pishesh?");
//}

//Task 3*. Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2'
//(т.е. ЛЮБАЯ строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age = 4;
const age_2 = 18;
const age_3 = 60;
age = +age;
const isNotAnumber = isNaN(age)
//console.log(age);
//console.log(isNotAnumber)
if (isNotAnumber == false) {
 if (age < age_2) {
   console.log(
    "You don’t have access cause your age is " +
       age +
      ". It’s less then " +
      age_2 +
       "."
  );
 } else if (age >= age_2 && age < age_3) {
    console.log("Welcome!");
} else if (age > age_3) {
   console.log("Keep calm and look Culture channel");
 } else {
  console.log("Technical work");
 }
} else {
console.log("ty che bukvy suda pishesh?");
}

//Task 4*. Преобразовать Task 3* таким образом, чтобы age принимался через prompt
//в привязанной вёрстке, а результат выводился в alert

let age = prompt("How old are you?(only num)");
const age_2 = 18;
const age_3 = 60;

if (age === null || age === undefined || age === "") {
  alert("no data")
}
else {
console.log(age);  
age = +age;
const isNotAnumber = isNaN(age)

console.log(isNotAnumber)

if (isNotAnumber == false) {
  if (age < age_2) {
   alert(
      "You don’t have access cause your age is " +
        age +
        ". It’s less then " +
        age_2 +
        "."
    );
  } else if (age >= age_2 && age < age_3) {
    alert("Welcome!");
  } else if (age > age_3) {
    alert("Keep calm and look Culture channel");
  } else {
    alert("Technical work");
  }
} else {
  alert("ty che bukvy suda pishesh?");
}
}