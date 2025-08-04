/** Problem 06 :  (Current Salary )  */
// var experience = 30;
// var startingSalary = 45000;
//write your code here
var experience = 30;
var startingSalary = 45000;
var Salary = startingSalary;
var percentage = 0.05;

for (var i = 1; i <= experience; i++) {
  Salary = Salary + Salary * percentage;
}
console.log(Salary.toFixed(2));
