// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {
      ...employee, 
      [key] : value
      };

      employee[key]= value;

  return newEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  
  delete newEmployee[key];

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  const newEmployee = {
    employee,
    [key] : "Sam"
   };

  delete employee[key];

  console.log(newEmployee);
  console.log(employee[key]);
  return employee;
}
