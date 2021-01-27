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

let calculateMetric = (weight, height) => weight / height**2;
let calculateImperial = (weight, height) => weight / height**2 * 703;

let btn = document.querySelector('#calculate-btn');
btn.addEventListener('click', function(){
    // extract out the unit of measurement
    let unitOfMeasurement;
    let allUnits = document.querySelectorAll('.unit');
    for (let u of allUnits) {
        if (u.checked) {
            unitOfMeasurement = u.value;
            break;
        }
    }
    
    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);

    // let bmi;
    // if (unitOfMeasurement == 'imperial') {
    //      bmi = calculateBMI(weight, height, calculateImperial );
    // } else {
    //     bmi = calculateBMI(weight, height, calculateMetric);
    // }

    // Ternary operator -- ?
    let bmiFormula= unitOfMeasurement == 'imperial' ? calculateImperial : calculateMetric;
    let bmi = calculateBMI(weight, height, bmiFormula);
    let healthAdvice = adviseHealth(bmi);

    // alert("Your bmi is " + bmi + " and you are " + healthAdvice);
    let results = document.querySelector("#results");
    results.innerHTML = `
    <h1>Your results:</h1>
    <ul>
        <li>BMI: ${bmi}</li>
        <li>Your weight status: ${healthAdvice}
    </ul>
    `

}) // end add event listener to button

// select all the radio buttons
let unitRadioButtons = document.querySelectorAll('.unit');
// go through each of the radio button
for (let radioButton of unitRadioButtons) {
    // add an event listener to the radio button
    radioButton.addEventListener('change', function(){
        let unitOfMeasurement = document.querySelector('.unit:checked').value;
        if (unitOfMeasurement == 'imperial') {
            document.querySelector('#weight-help-text').innerHTML = "in pounds";
            document.querySelector('#height-help-text').innerHTML = "in inches";
        } else {
            document.querySelector('#weight-help-text').innerHTML = "in kg";
            document.querySelector('#height-help-text').innerHTML = "in metres";
        }
    }) 
}