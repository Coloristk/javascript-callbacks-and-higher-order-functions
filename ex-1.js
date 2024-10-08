// Exercise #1: For Each Function

function forEach(array, operation) {
  for(let i of array){
    newEmployeeSalaries.push(operation(i))
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

let addSalary = function (array) {
  return array + 5000
}

forEach(employeeSalaries,addSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
