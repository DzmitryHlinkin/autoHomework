/*
Создайте класс AQA с полями experience_in_years: number, grade: string, name: string, desiredSalary: number, 
    skills: Array<string> и методом getCV, выводящим инфо о тестировщике вида 
    "This is Anatoly Karpovich's CV. 
     Middle AQA with 3 years of working experience. 
     Key skills are typescript, automation and manual testing.
     Desired salary is not less then $3000". 
    Создайте класс AQAnew с теми же полями. Реализуйте в нем метод getCV таким образом, 
    чтобы он использовал тот же метод класса AQA, но с контекстом класса AQAnew
    */

    function checkIsANumber(value) {
        if(value && typeof value === 'number') {
            return value;
        } else {
            throw new Error(`${value} is invalid value for this field`)
        };
    }
    
    function checkIsAString(value) {
        if(value && typeof value === 'string') {
            return value;
        } else {
            throw new Error(`${value} is invalid value for this field`)
        };
    }
    
    function checkIsAnArray(value) {
        if(value && Array.isArray(value) && value.length > 0) {
            return value;
        } else {
            throw new Error(`${value} is invalid value for this field`)
        };
    }

    class AQA {
      
        constructor(
          experience_in_years,
          grade,
          name,
          desiredSalary,
          skills,
        ) {
          this.experience_in_years = checkIsANumber(experience_in_years);
          this.grade = checkIsAString(grade);
          this.name = checkIsAString(name);
          this.desiredSalary = checkIsANumber(desiredSalary);
          this.skills = checkIsAnArray(skills);
        }
      
        getCV() {
          return `This is ${this.name}'s CV.
            ${this.grade} AQA with ${this.experience_in_years} years of working experience.
            Key skills are ${this.skills.join(", ")}.
            Desired salary is not less than $${this.desiredSalary}.`;
        }
      }

      const aQA = new AQA(Infinity, 'Pomidor', "Tolian Kotik", 5000, ["novice manual", "javastriptize", "api testing"]);
      console.log(aQA.getCV())


/* Расширьте встроенный класс String с помощью метода removeSpecialCharacters. Этот метод должен работать для каждой строки, созданной в вашем файле js. Решить также через регулярное выражение. 
    Например:
    'HE!!LL??OO'.removeSpecialCharacters() => 'HELLO'
    */
   
    String.prototype.removeSpecialCharacters = function() {
        return this.replace(/[^\w\s]/gi, '');
      };
      
      const str = 'HE!!LL??OO';
      console.log(str.removeSpecialCharacters()); 