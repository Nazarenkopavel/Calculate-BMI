/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
function bmi(weight, height) {
  let a = weight / Math.pow(height, 2);
  if (a <= 18.5) {
    return "Underweight";
  } else if (a > 18.5 && a <= 25) {
    return "Normal";
  } else if (a > 25 && a <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
/*
  function bmi(weight, height) {
    
  var bmi  = weight/(height*height);
  
   return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
  
  }
  */
