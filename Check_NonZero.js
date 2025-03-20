class EmployeePayrollData {
  // Constructor with validation checks
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  // Getter and Setter for name with validation
  get name() {
    return this._name;
  }

  set name(name) {
    let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$"); // Name should start with uppercase and have at least 3 more lowercase letters
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw new Error("Name is Incorrect!");
    }
  }

  // Getter and Setter for ID with validation (Non-zero positive number)
  get id() {
    return this._id;
  }

  set id(id) {
    if (id > 0) {
      this._id = id;
    } else {
      throw new Error("ID must be a positive non-zero number!");
    }
  }

  // Getter and Setter for Salary with validation (Non-zero positive number)
  get salary() {
    return this._salary;
  }

  set salary(salary) {
    if (salary > 0) {
      this._salary = salary;
    } else {
      throw new Error("Salary must be a positive non-zero number!");
    }
  }

  // Getter and Setter for Gender with validation (Only 'M' or 'F')
  get gender() {
    return this._gender;
  }

  set gender(gender) {
    let genderRegex = new RegExp("^[MF]$"); // Only 'M' or 'F' allowed
    if (genderRegex.test(gender)) {
      this._gender = gender;
    } else {
      throw new Error("Gender must be 'M' or 'F'!");
    }
  }

  // Getter and Setter for Start Date with validation (Must not be a future date)
  get startDate() {
    return this._startDate;
  }

  set startDate(startDate) {
    if (startDate <= new Date()) {
      this._startDate = startDate;
    } else {
      throw new Error("Start Date cannot be a future date!");
    }
  }

  // Method to return employee details as a string
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate = this.startDate
      ? this.startDate.toLocaleDateString("en-US", options)
      : "undefined";

    return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
  }
}

// Creating Employee Objects with Try-Catch
try {
  let employeePayrollData = new EmployeePayrollData(
    1,
    "Mark",
    30000,
    "M",
    new Date("2023-06-01")
  );
  console.log(employeePayrollData.toString());

  // Testing Name Validation (This will fail)
  employeePayrollData.name = "john"; // Should throw an error
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error("Error: " + e.message);
}

try {
  // Testing Gender Validation (This will fail)
  let employee2 = new EmployeePayrollData(
    2,
    "Alice",
    40000,
    "X",
    new Date("2022-01-15")
  );
  console.log(employee2.toString());
} catch (e) {
  console.error("Error: " + e.message);
}

try {
  // Testing Future Date Validation (This will fail)
  let employee3 = new EmployeePayrollData(
    3,
    "John",
    50000,
    "M",
    new Date("2030-01-01")
  );
  console.log(employee3.toString());
} catch (e) {
  console.error("Error: " + e.message);
}
