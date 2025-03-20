let empDailywageArr = [160, 80, 160, 0, 160, 80, 160, 160, 0, 160]; // Sample data
let totalWorkingDays = 8; // Example value
let totalEmpHrs = 64; // Example value
let totEmpWage = 0;

// UC 7A - Calculate Total Employee Wage
function sum(dailywage) {
  totEmpWage += dailywage;
}
empDailywageArr.forEach(sum);
console.log(
  "UC7A - Total Days: " +
    totalWorkingDays +
    " Total Hrs: " +
    totalEmpHrs +
    " Emp Wage: " +
    totEmpWage
);

function totalWages(totalWage, dailywage) {
  return totalWage + dailywage;
}
console.log(
  "UC7A Emp Wage with reduce: " + empDailywageArr.reduce(totalWages, 0)
);

// UC 7B - Map Day with Daily Wage
let dailyCntr = 0;
function mapDayWithWage(dailywage) {
  dailyCntr++;
  return dailyCntr + "=" + dailywage;
}
let mapDayWithWageArr = empDailywageArr.map(mapDayWithWage);
console.log("UC7B Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full-time Wage (160) was earned
function fulltimeWage(dailywage) {
  return dailywage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find first occurrence of Full Time Wage (160)
function findFulltimeWage(dailywage) {
  return dailywage.includes("160");
}
console.log(
  "UC 7D First time Fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFulltimeWage)
);

// UC 7E - Check if every element in Full Day Wage Array holds Full-time Wage
function isAllFulltimeWage(dailywage) {
  return dailywage.includes("160");
}
console.log(
  "UC 7E Check All Elements have Full Time Wage: " +
    fullDayWageArr.every(isAllFulltimeWage)
);

// UC 7F - Check if any Part-Time Wage (80) exists
function isAnyPartTimeWage(dailywage) {
  return dailywage.includes("80");
}
console.log(
  "UC 7F Check If Any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage)
);

// UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailywage) {
  let wage = parseInt(dailywage.split("=")[1]); // Extract wage number from string
  return wage > 0 ? numOfDays + 1 : numOfDays;
}
console.log(
  "UC 7G - Number of Days Emp Worked: " +
    mapDayWithWageArr.reduce(totalDaysWorked, 0)
);
