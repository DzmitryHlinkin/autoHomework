/*
1. Создайте функцию, принимающую число n, которая при каждом вызове будет 
генерировать случайное число [1 - n] включительно. 
Условие - каждый следующий вызов должен давать новое число 
(не встречавшееся в прошлых вызовах). 
И так пока не переберутся все n чисел. На n + 1 вызов и 
далее функция должна возвращать 'All numbers were received'. 
Задачу решить через замыкания
Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 
'All numbers were received'
    */
/*
function randomGenerator(n) {
    const usedNumbers = []; 
    
    function generateRandom() {
      if (usedNumbers.length === n) { 
        return 'All numbers were received';
      }
      
      let randomNum = Math.ceil(Math.random() * n); 
      
      while (usedNumbers.includes(randomNum)) { 
        randomNum = Math.ceil(Math.random() * n);
      }
      
      usedNumbers.push(randomNum); 
      
      return randomNum;
    }
    
    return generateRandom; 
  }
  
  
  let randomFunc = randomGenerator(5);
  
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
  console.log(randomFunc()); 
*/

  /*
  2. Создать функцию, которая принимает на вход дату в 
  виде гггг/мм/дд и возвращает, что вам 18 лет и подсчитанное 
  количество месяцев.
   Реализовать с помощью объекта Date
   */
/*
  function countAgeAndMonths(birthDate) {
    let now = new Date();
    let birthday = new Date(birthDate);
   // console.log(birthday)
  //  console.log(now)
    function countMonths(birthday, now) {
      let years = now.getFullYear() - birthday.getFullYear();
      console.log(years)
      let months = now.getMonth() - birthday.getMonth();
     // console.log(months)
      if (months < 0) {
        years--;
        months += 12;
      }
     // console.log(years, months)
      return years * 12 + months;
    }
    let ageMonths = countMonths(birthday, now)
    return "Вам 18 лет и " + ageMonths + " месяцев.";
}
console.log(countAgeAndMonths('1992-10-16'))
*/
/*
3.  Таня любит печь торты. У нее есть рецепты и ингредиенты. К сожалению, 
она не сильна в математике. 
    Поможешь ей узнать, сколько тортов она сможет испечь, учитывая ее рецепты?
    Напишите функцию cakes(), которая принимает рецепт (объект) и 
    доступные ингредиенты (тоже объект) и возвращает максимальное 
    количество тортов, которые Таня может испечь (целое число). 
    Для простоты нет единиц измерения количества (например, 1 фунт муки 
    или 200 г сахара — это просто 1 или 200). 
    Ингредиенты, отсутствующие в объектах, можно считать равными 0.
    Пример:
      // must return 2
      cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
      // must return 0
      cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
*/
/*
function cakes(recipe, available) {
    let maxCakes = Infinity; 
    for (let ingredient in recipe) { 
      if (!available.hasOwnProperty(ingredient)) { 
        return 0;
      }
      
      let amount = recipe[ingredient]; 
      let availableAmount = available[ingredient];
      console.log(amount)
      console.log(available)
      maxCakes = Math.min(Math.floor(availableAmount / amount), maxCakes);
      console.log(maxCakes)
    }
    
    return maxCakes;
  }

  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, milk: 200, eggs: 6}))


*/




  /*
  Вам нужно создать класс Team, структура представлена ниже. 
    Вы должны реализовать следующие методы:
      get/set team's name
      get/set team’s sprint duration (number of weeks)
      get planned release date
      get/set daily standup time
      get number of teammates
      add/remove/edit teammate
      add/remove/edit tasks (таски могут храниться только уникальные)
      show all teammates
      show teammates by specialication
      show all tasks

    Создайте класс ITSpecialist. Реализуйте следующие методы:
      get all info
      set country
      get salary
    Создайте дочерние классы для некоторых айтишников. 
    Реализовать возможность задавать свойства дочерних классов.
    Каждый класс должен находиться в своем собственном файле.
    Все данные из обьекта класса Team вывести в HTML 

    Структура:

    class Team
    name
    sprint_duration
    release_date
    daily_standup_time
    teammates: []
    tasks: [],

    class ITSpecialist
    name
    grade
    experience_in_years
    age
    country
    _salary

    class Manager
    isScrumMaster

    class QA
    isAqa

    class Developer
    isWritingUnitTests

    class Task
    featureName
    userStoryNumber
    estimations
    */

    class Team {
        constructor(name, sprintDuration, dailyStandupTime) {
          this.name = name;
          this.sprintDuration = sprintDuration;
          this.dailyStandupTime = dailyStandupTime;
          this.teammates = [];
          this.tasks = [];
        }
      
        
        get teamName() {
          return this.name;
        }
        set teamName(name) {
          this.name = name;
        }
      
       
        get sprintDuration1() {
          return this.sprintDuration;
        }
        set sprintDuration1(duration) {
          this.sprintDuration = duration;
        }
      
       
        get plannedReleaseDate() {
          let today = new Date();
          let releaseDate = new Date(today.getTime() + (this.sprintDuration));
          return releaseDate;
        }
      
        
        get dailyStandupTime1() {
          return this.dailyStandupTime;
        }
        set dailyStandupTime1(time) {
          this.dailyStandupTime = time;
        }
      
       
        get numberOfTeammates() {
          return this.teammates.length;
        }
      
        
        addTeammate(teammate) {
          this.teammates.push(teammate);
        }
        removeTeammate(teammate) {
          let index = this.teammates.indexOf(teammate);
          if (index !== -1) {
            this.teammates.splice(index, 1);
          }
        }
        editTeammate(oldTeammate, newTeammate) {
          let index = this.teammates.indexOf(oldTeammate);
          if (index !== -1) {
            this.teammates[index] = newTeammate;
          }
        }
      
        
        addTask(task) {
          if (!this.tasks.includes(task)) {
            this.tasks.push(task);
          }
        }
        removeTask(task) {
          let index = this.tasks.indexOf(task);
          if (index !== -1) {
            this.tasks.splice(index, 1);
          }
        }
        editTask(oldTask, newTask) {
          let index = this.tasks.indexOf(oldTask);
          if (index !== -1) {
            this.tasks[index] = newTask;
          }
        }
      
       
        showAllTeammates() {
          console.log("Teammates:");
          for (let teammate of this.teammates) {
            console.log(teammate);
          }
        }
      
     
        showTeammatesBySpecialization(specialization) {
          console.log(`Teammates with specialization "${specialization}":`);
          for (let teammate of this.teammates) {
            if (teammate.specialization === specialization) {
              console.log(teammate);
            }
          }
        }
      
     
        showAllTasks() {
          console.log("Tasks:");
          for (let task of this.tasks) {
            console.log(task);
          }
        }
      }
      
    
 
      class ITSpecialist {
        constructor(name, grade, experienceInYears, age, country, salary) {
          this.name = name;
          this.grade = grade;
          this.experienceInYears = experienceInYears;
          this.age = age;
          this.country = country;
          this._salary = salary;
        }
      
       
        getAllInfo() {
          return `${this.name}, ${this.grade}, ${this.experienceInYears} years of experience, ${this.age} years old`;
        }
      
       
        get country1() {
          return this.country;
        }
        set country1(country) {
          this.country = country;
        }
      
       
        get salary() {
          return this._salary;
        }
      }
      
     
    
      
      class Manager extends ITSpecialist {
        constructor(name, grade, experienceInYears, age, isScrumMaster) {
          super(name, grade, experienceInYears, age);
          this.isScrumMaster = isScrumMaster;
        }
      }
      
     
      
      
      class QA extends ITSpecialist {
        constructor(name, grade, experienceInYears, age, isAqa) {
            super(name, grade, experienceInYears, age);
            this.isAqa = isAqa;
          }
        }
        
    
        
        class Developer extends ITSpecialist {
          constructor(name, grade, experienceInYears, age, isWritingUnitTests) {
            super(name, grade, experienceInYears, age);
            this.isWritingUnitTests = isWritingUnitTests;
          }
        }
        
    
     

        class Task {
          constructor(featureName, userStoryNumber, estimations) {
            this.featureName = featureName;
            this.userStoryNumber = userStoryNumber;
            this.estimations = estimations;
          }
        }
        
     
        let team = new Team("Team A", 2, "09:00");    
        console.log(team)
        
let  jsonString = JSON.stringify(team, null, 4);
let  jsonTextElement = document.getElementById("jsonText");  
   
let myDiv = document.getElementById("myDiv");

// Изменение содержимого div
myDiv.innerText = jsonString;

// Можно также изменять стили div, например:
myDiv.style.color = "red";
myDiv.style.fontSize = "20px";