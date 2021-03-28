const ht = prompt('Enter your height (in Meters)');
const mass = prompt('Enter your weight (in Kilograms )');
const calcBMI = function calcBMI(mass, ht){
    return mass /(ht*ht);
}
const bmi = calcBMI(mass, ht);
let msg;
if(bmi < 18.5) 
    msg = 'Your weight status is #Underweight';
else if(bmi >= 18.5 && bmi <=24.9){
    msg = 'Your weight status is Normal / Healthy Weight';
}
else if(bmi <= 25.0 && bmi <= 29.9){
    msg = 'Your weight status is Overweight';
}else if(bmi <= 30){
    msg = 'Your weight status is Obese';
}
alert(`Your BMI is ${bmi} \n ${msg}`);