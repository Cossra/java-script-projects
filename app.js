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
    var bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
  
    if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
      return "Your BMI is " + bmi + ", so you are overweight.";
    }
  }

  //Advanced BMI calculator using promps & alerts 

  function bmiCalculator() {
    const heightInput = prompt("Enter your height in feet and inches (e.g., 5'9):");
    const weightInput = prompt("Enter your weight in pounds:");

    // To match height format like 5'9 or 6'0
    const match = heightInput.match(/(\d+)'(\d+)/);

    if (!match) {
        alert("Invalid height format. Please use format like 5'9.");
        return;
    }

    const feet = parseInt(match[1]);
    const inches = parseInt(match[2]);
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;

    const weightPounds = parseFloat(weightInput);
    const weightKg = weightPounds * 0.453592;

    const bmi = (weightKg / (heightMeters ** 2)).toFixed(2);

    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + ", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi + ", so you have a normal weight.");
    } else {
        alert("Your BMI is " + bmi + ", so you are overweight.");
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

//Guest list name verifier

var guestName = prompt("What is your name?");
var guestList = ["bobby", "adam", "joseph", "drew"];

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}

//FizzBuzz Game 

var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } 
    else if (count % 3 === 0) {
        output.push("Fizz");
    } 
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    
    count++;
    }
    console.log(output);
}

// Who's Buying Lunch? A function which will select a random name from a list of names. 
//The person selected will have to pay for everybody's food bill.

function whosPaying(names) {
    
    const numberOfPeople =  names.length;
    const randomPersonSelector = Math.floor(Math.random() * numberOfPeople);
    const randomPerson = names[randomPersonSelector];
    return randomPerson + " is going to buy lunch today!"

}


// 99 bottles of beer on the wall game!

var onWall = [];
var beers = 1;

function beersOnTheWall() {

    while (beers < 100) {
    
    if (beers < 99) 
    {
    console.log(beers + " Bottles of beer on the wall, " + beers + " bottles of beer, take one down pass it around, " + beers + " bottles of beer on the wall.");
    } 
    else if (beers === 99) 
    {
    console.log("No more Bottles of beer on the wall, no more bottles of beer, go to the store and buy some more, " + beers + " bottles of beer on the wall.");
    }
    
    beers++;
    onWall.push(beers);
    }
}

//99 Bottles of beer with a better format.

var numberOfBottles = 99
while (numberOfBottles === 0) {
    var bottleWord = "bottle";
    if (numberOfBottles >= 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// FibonacciGenerator 

function fibonacciGenerator(n) {
    var output = [];
  
    if (n === 1) {
      output = [0];
    } else if (n === 2) {
      output = [0, 1];
    } else {
      output = [0, 1]; // Make sure to initialize this here
      for (var i = 2; i < n; i++) {
        var previousNumbers = output[i - 1] + output[i - 2];
        output.push(previousNumbers);
      }
    }
  
    return output;
  }

  // Dice Roller Simulator with Loop 🎲

function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var total = dice1 + dice2;

    return "You rolled a " + dice1 + " and a " + dice2 + ". Total: " + total;
}

// Loop to roll the dice 10 times
for (var i = 1; i <= 10; i++) {
    console.log("Roll " + i + ": " + rollDice());
}

