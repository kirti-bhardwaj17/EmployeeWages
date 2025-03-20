let totalWages = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
  .reduce(
    (totalWage, dailyHrsAndWage) => totalWage + dailyHrsAndWage.dailyWage,
    0
  );

let totalHours = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours > 0)
  .reduce(
    (totalHours, dailyHrsAndWage) => totalHours + dailyHrsAndWage.dailyHours,
    0
  );

console.log(
  "UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages
);

process.stdout.write("UC 11B Logging Full Work Days");

empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours === 8)
  .forEach((dailyHrsAndWage) =>
    process.stdout.write(dailyHrsAndWage.toString())
  );

let partWorkingDayStrArr = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours === 4) // Fixed case sensitivity
  .map((dailyHrsAndWage) => dailyHrsAndWage.toString());

console.log("\nUC 11C Part Working Day Strings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
  .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours === 0) // Fixed single `=` to `===`
  .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);

console.log("UC 11D Non Working Day Numbers: " + nonWorkingDayNums);
