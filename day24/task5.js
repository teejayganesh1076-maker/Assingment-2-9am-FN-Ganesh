class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this.department=department
    }
    display(){
        return`Name of the Employee : ${this.name}, Salary : ${this.salary}, Department : ${this.department}`
    }
}
const ma = new Manager("ganesh", 200000,"IT");
console.log(ma.name);
console.log(ma.salary);
console.log(ma.display());


