//Dog to Human age calculator, promp/alert.
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog would be " + humanAge + " years old if they were human");

//prompt/alert love score calculator.

prompt("What is your name?");
prompt("What is your crushes name?");

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;
if (loveScore > 60) {
    alert("Wow! Your love score is " + loveScore + "%" + "You love eachother like Kayne loves Kayne!");
} else {
    alert("Your love score is " + loveScore + "%");
}

//BMI Calculator 

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
  
    if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
      return "Your BMI is " + bmi + ", so you are overweight.";
    }
  }

// Leap year calculator 

function isLeap(year) {

  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return "Leap year."
          } else {
              return "Not leap year."
          }
      } else {
          return "Leap year."
      }
  } else {
      return "Not leap year."
  }
}




