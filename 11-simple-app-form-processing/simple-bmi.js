const prompt = require('prompt-sync')();

// note: formula will be referring to a function
// that when given weight, height as arugments
// calculate and return the BMI
function calculateBMI(weight, height, formula) {
    return formula(weight, height)
}

function adviseHealth(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal"
    } else if (bmi < 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

function askForUnitOfMeasurement() {
    while (true) {
         let unitOfMeasurement = prompt("Please enter the unit of measurement (I for imperial, M for metric) ");
         if (unitOfMeasurement == 'I' || unitOfMeasurement == 'M') {
            break;
         }
    }

    // let unitOfMeasurement = prompt("Please enter the unit of measurement (I for imperial, M for metric) ");
    // while (unitOfMeasurement != 'I' && unitOfMeasurement != 'M') {
    //     console.log("Please enter either I or M");
    //     let unitOfMeasurement = prompt("Please enter the unit of measurement (I for imperial, M for metric) ");
    // }

    // do {
    //     let unitOfMeasurement = prompt("Please enter the unit of measurement (I for imperial, M for metric) ");
    // } while(unitOfMeasurement != 'I' && unitOfMeasurement != 'M')
   
    return unitOfMeasurement;
}

// program begins here:
let unitOfMeasurement = askForUnitOfMeasurement();

let weight = prompt("Please enter the weight: ")
let height = prompt("Please enter the height: ")

let bmi;
if (unitOfMeasurement == 'I') {
    bmi = calculateBMI(weight, height, (weight, height)=>weight/height**2*703);
} else {
    bmi = calculateBMI(weight, height, (weight, height)=>weight/height**2);
}

console.log("Your BMI is: ", bmi);
console.log(adviseHealth(bmi));
