let WeeklyIncome = parseInt(prompt("Weekly Income"));
let FoodCost = parseInt(prompt("Food Cost"));
let HousingCost = parseInt(prompt("Housing Cost"));
let TransportationCost = parseInt(prompt("Transportation Cost"));
let OtherCost = parseInt(prompt("Other Cost"));
let YearSavings = parseInt(prompt("How much do you want to save in a year ?"));
// let WeeklyIncome = 4500;
// let FoodCost = 1000;
// let HousingCost = 2000;
// let TransportationCost = 300;
// let OtherCost = 700;
// let YearSavings = 5000;
var WeeklyGoalSavings =  YearSavings /52;
var totalweeklycost = FoodCost + HousingCost + TransportationCost + OtherCost;
var actualSavings = WeeklyIncome - totalweeklycost;

if (actualSavings >= WeeklyGoalSavings){
	console.log("Your On Target!");
 } else {
 	let shortSavings = WeeklyGoalSavings - actualSavings;
 	console.log("Need to save! " + shortSavings);
 }


