const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;

let empDailyWageArr = [];
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR; // Fixed incorrect multiplication
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

// Loop to calculate total work hours and daily wages
while (
  totalEmpHrs < MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 3); // Fixed syntax error
  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;
  let dailyWage = calcDailyWage(empHrs);

  empDailyWageArr.push(dailyWage);
  empDailyWageMap.set(totalWorkingDays, dailyWage);
}

console.log("UC 6 & 7: Employee Wage Map:");
console.log(empDailyWageMap);

// Function to calculate total wages
function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

// Compute total salary from the map
console.log(
  "UC7A Emp Wage Map Total Hrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
);
