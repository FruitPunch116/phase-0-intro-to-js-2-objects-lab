const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
// console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    // console.log(newEmployee);
    // console.log(key);
    // console.log(employee);
    // console.log(value)
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key]= value;
  // console.log(employee);
  //console.log(key);
  return employee;
};

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee[key];
  // console.log(employee);
  // console.log(key);
  // console.log(newEmployee);
  return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key];
  delete employee[key];
  // console.log(employee)
  // console.log(employee[key]);

  return employee;
};
