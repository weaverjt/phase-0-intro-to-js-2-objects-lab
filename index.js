// Write your solution in this file!


const employee = {
    name: "Jake",
    street: 2
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }

  const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
obj[key] = value;
return obj;
}
 
destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Same");


function deleteFromEmployeeByKey(obj, key) {
    const newObj = {obj}
     delete newObj[key];
    return newObj;
}

deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

destructivelyDeleteFromEmployeeByKey(employee, "name")




