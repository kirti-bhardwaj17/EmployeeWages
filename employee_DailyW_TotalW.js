// UC 6 Arrays
function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

// Function to get working hours based on empCheck value
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case 0:
      return 0; // Absent
    case 1:
      return 4; // Part-time
    case 2:
      return 8; // Full-time
    default:
      return 0;
  }
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20; // Add WAGE_PER_HOUR variable

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

// Storing Daily Wage in an Array
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  empDailyWageArr.push(calcDailyWage(empHrs));
  totalEmpHrs += empHrs;
}

let empWage = calcDailyWage(totalEmpHrs);
console.log(
  " Total Days: " +
    totalWorkingDays +
    " Total Hrs: " +
    totalEmpHrs +
    " Emp Wage: " +
    empWage
);
