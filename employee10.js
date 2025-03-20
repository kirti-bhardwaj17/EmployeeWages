const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = [];

function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case 0:
      return 8; // Full-time hours
    case 1:
      return 4; // Part-time hours
    default:
      return 0; // Absent
  }
}

// Loop to calculate work hours, daily wages, and store them in an array
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 3); // Fixed syntax error
  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;

  empDailyHrsAndWageArr.push({
    dayNum: totalWorkingDays,
    dailyHours: empHrs,
    dailyWage: calcDailyWage(empHrs),
    toString() {
      return `\nDay ${this.dayNum} => Working Hours: ${this.dailyHours}, Wage Earned: ${this.dailyWage}`;
    },
  });
}

// Logging the array with custom toString() method
console.log(
  "UC 10 Showing Daily Hours Worked and Wage Earned: " +
    empDailyHrsAndWageArr.map((obj) => obj.toString()).join("")
);
