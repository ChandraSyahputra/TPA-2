function BMI() {
  let height = document.getElementById('h').value;
  let weight = document.getElementById('w').value;
  let bmi = weight / ((height / 100) ** 2);
  let yourBMI = (bmi.toFixed(1));

  if (yourBMI < 18.5) {
    result.innerHTML = "Your BMI is " + yourBMI + " which means You are Underweight";
  } else if (yourBMI >= 18.5 && yourBMI < 24.9) {
    result.innerHTML = "Your BMI is " + yourBMI + " which means You are Normal weight";
  } else if (yourBMI >= 25 && yourBMI < 29.9) {
    result.innerHTML = "Your BMI is " + yourBMI + " which means You are Overweight";
  } else {
    result.innerHTML = "Your BMI is " + yourBMI + " which means You are Obesity";
  }
}