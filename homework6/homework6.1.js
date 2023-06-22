var enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 12,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

/*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
  Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

/*
   enterprises.forEach(enterprise => {
    let totalEmployees = 0;
    enterprise.departments.forEach(department => {
      totalEmployees += department.employees_count;
    });
    console.log(`${enterprise.name} ${totalEmployees ? totalEmployees : 'нет'} сотрудников`)
    enterprise.departments.forEach(department => {
        console.log(`- ${department.name} ${department.employees_count ? department.employees_count : 'нет'} сотрудников`)
        ;})
  });
*/

/*
  2. Написать функцию, которая будет принимать 1 аргумент 
  (id отдела или название отдела и возвращать название предприятия, к которому относится).
  */
/*
function getEnterpriseByDepartment(idOrName) {
  const result = enterprises.filter((enterprise) => {
   return enterprise.departments.find((departments) => departments.id === idOrName || departments.name === idOrName)
  });
  return result
}

function getEnterpriseNameByDepartment(idOrName) {
    const enterprises = getEnterpriseByDepartment(idOrName)

    return enterprises.map(enterprise => enterprise.name)
}
console.log(getEnterpriseNameByDepartment('Отдел маркетинга'))
*/


function getEnterpriseByDepartment(idOrName) {
   return enterprises.find((enterprise) => 
    enterprise.departments.some((departments) => departments.id === idOrName || departments.name === idOrName)
    );
  }
  
  function getEnterpriseNameByDepartment(idOrName) {
      return getEnterpriseByDepartment(idOrName).name
  
  }
  //console.log(getEnterpriseByDepartment('Отдел маркетинга'))
  

/*
3. Написать функцию, которая будет добавлять предприятие. 
В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/
function getNewEnterpriceID(enterprises){
    let lastID = 0
    enterprises.forEach(enterprise => {

        if (enterprise.id > lastID) {
            lastID = enterprise.id
        }
        enterprise.departments.forEach(department => {
          if (department.id > lastID){
          lastID = department.id
          }
        });
      });
      return lastID + 1
  }


function addEnterprise(name) {

    const newEnterprise = {
      id: getNewEnterpriceID(enterprises),
      name,
      departments: [],
    };
    enterprises.push(newEnterprise);
  }


  
 // addEnterprise("hjhkhkh")
//console.log(enterprises)
 
/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве 
аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/

function getEnterpriseById(enterpriseID) {
    const enterprise = enterprises.find((ent) => ent.id === enterpriseID);
    //console.log(enterprise)
    return enterprise
   
}

function addDepartment (enterpriseID, departmentName) {
    if(getEnterpriseById(enterpriseID)) {
        const newDepartment ={
            id: getNewEnterpriceID(enterprises),
            name: departmentName,
            employees_count: "",
        }
    
        getEnterpriseById(enterpriseID).departments.push(newDepartment);
    }
}

//addDepartment (5, "sdsfsffsaas")
//console.log(JSON.stringify(enterprises))

/*
5. Написать функцию для редактирования названия предприятия. 
Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")
*/

function editEnterprise(enterpriseID, newName) {
  if (getEnterpriseById(enterpriseID)) {
    getEnterpriseById(enterpriseID).name = newName;
  }
}
//editEnterprise(5, 'dddddddd')
//console.log(JSON.stringify(enterprises))


/*
6. Написать функцию для редактирования названия отдела. 
Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/


 function editDepartment(departmentId, newName) {
  const department = enterprises.flatMap((e) => e.departments).find((d) => d.id === departmentId);
  if (department) {
    department.name = newName;
  }
}
//editDepartment(2, 'molodcy')
//console.log(JSON.stringify(enterprises))


/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/

function getEnterpriseIndex(enterpriseID) {

 index = enterprises.findIndex((ent) => ent.id === enterpriseID);
console.log(index)
}



function deleteEnterprise(enterpriseID) {
  if (getEnterpriseIndex(enterpriseID) !== -1) {
    enterprises.splice(getEnterpriseIndex(enterpriseID), 1);;
  }
}






