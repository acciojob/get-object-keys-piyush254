//your JS code here. If required.
let student = {
  name: "Dhoni",
};

student.__proto__.getKeys = function () {
  return Object.keys(this);
}


console.log(student.getKeys())