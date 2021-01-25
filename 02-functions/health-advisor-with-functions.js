const prompt = require("prompt-sync")();

// the Health Advisor will ask the user to enter
// their weight and height, and then calculate the BMI
// Now the user can choose to opt for imperial or metric system
// when entering the weight or height.
// Also, base on the BMI, advise the user on whether to cut calories or
// to increase calories

// 1. Identify the IPO
// 2. Identify the Order
// 3. We need to know the state variables:
// 4. Each of the P is just one of the five basic programming constructs
//    - sequence
//    - loops (for, while)
//    - if (branching)
//    - variables
//    - functions

/////////////////

function askForUnitOfMeasurement() {
  // 1. Ask the user for imperial or metric
  let unitOfMeasurement = prompt(
    "Select system of measurement (I for imperial or M for metric)"
  );
  return unitOfMeasurement;
}

function askForWeightAndHeight(unitOfMeasurement) {
  // 2. Ask the user for their weight and height, based on their preferred unit of measurement
  let weight;
  let height;
  if (unitOfMeasurement == "M") {
    weight = prompt("Please enter your weight in KG: ");
    height = prompt("Please enter your height in metres: ");
  } else {
    weight = prompt("Please enter your weight in pounds: ");
    height = prompt("Please enter your height in inches: ");
  }
  return [weight, height];
}

function calculateBMI(weight, height, unitOfMeasurement) {
  let bmi;
  if (unitOfMeasurement == "M") {
    bmi = weight / height ** 2;
  } else {
    bmi = (weight / height ** 2) * 703;
  }
  return bmi;
}

function adviseOnHealth(bmi) {
  if (bmi < 18.5) {
    return "You are underweight";
  } else if (bmi < 25) {
    return "You are normal weight";
  } else if (bmi < 30) {
    return "You are overweight";
  } else {
    return "You are obese";
  }
}

let unitOfMeasurement = askForUnitOfMeasurement();
let [weight, height] = askForWeightAndHeight(unitOfMeasurement);
let bmi = calculateBMI(weight, height, unitOfMeasurement);

// 3. Calculate the BMI

console.log("Your bmi is ", bmi);

// 4. Display the health advice
console.log(adviseOnHealth(bmi));
