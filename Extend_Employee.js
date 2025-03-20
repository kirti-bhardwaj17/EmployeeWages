class EmployeePayrollData {
  // Constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Method to return employee details as a string
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate = this.startDate
      ? this.startDate.toLocaleDateString("en-US", options)
      : "undefined";

    return `id=${this.id}, name='${this.name}', salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
  }
}

// Creating Employee Objects
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

employeePayrollData.name = "John"; // Using setter method
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(
  2,
  "Terrisa",
  40000,
  "F",
  new Date()
);
console.log(newEmployeePayrollData.toString());
