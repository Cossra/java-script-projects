

function twoSum(nums, target) {
    let numberToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numberToIndex.hasOwnProperty(complement)) {
            return [numberToIndex[complement], i];
        }
        numberToIndex[nums[i]] = i;
    }

    return []; // Return empty array if no solution is found
}
/*
✅ First Function (Single-Pass)
- Efficiency: One loop — faster in practice.
- Approach: Build the map while checking for complements.
- Use case: Best for interviews or when performance matters.(maybe)
*/

// alternate function (with logic correction and explanation below)

function twoSumAlt(nums, target) {
    const numberToIndex = {};

    // First pass: store all numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i;
    }

    // Second pass: look for complement
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numberToIndex[complement] !== undefined && numberToIndex[complement] !== i) {
            return [i, numberToIndex[complement]];
        }
    }

    return []; // Return empty array if no solution is found
}
/*
  ✅ Second function (Two-pass hash map):
- Slightly more readable for beginners — logic is split into two steps
- First stores all values, then checks complements
- Also O(n) time and O(n) space, but with two passes instead of one
- Slightly less efficient, but still correct and clean
- ✅ Shows a more concrete, step-by-step approach to problem solving
  (first understand the data, then act on it) — great for learning and demonstrating clarity of thought
*/

/* Palindrome Stage 1 */
const str = 'I did, did I?';

const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();

    return inStr === inStr.split('').reverse('').join('');
}

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/* Palindrome */
Input: x = 121
Output: true
Explanation: Reads the same forwards and backwards.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left, which is not the same.


// 1) Core solution
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}

// 2) Helper to create a linked list from an array
function createList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let x of arr) {
    current.next = new ListNode(x);
    current = current.next;
  }
  return dummy.next;
}

// 3) Helper to convert a linked list back to array (for easy viewing)
function listToArray(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

// 4) Worked example
const l1 = createList([2, 4, 3]);  // represents 342
const l2 = createList([5, 6, 4]);  // represents 465

const summed = addTwoNumbers(l1, l2);
console.log(listToArray(summed));   // [7, 0, 8] → represents 807


//Higher Order Function Example:
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// LeetCode-style: Roman to Integer - Easy
// Convert a Roman numeral string to an integer

function romanToInt(s) {
    const map = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];
        if (current < next) {
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    return total;
}

// Takes a string containing brackets like "({[]})" and returns whether it's valid

function isValidBrackets(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
}

module.exports = isValidBrackets;


// LeetCode-style: Reverse String - Easy
// Reverse an array of characters in-place.

function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}


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

    const numberOfPeople = names.length;
    const randomPersonSelector = Math.floor(Math.random() * numberOfPeople);
    const randomPerson = names[randomPersonSelector];
    return randomPerson + " is going to buy lunch today!"

}


// 99 bottles of beer on the wall game!

var onWall = [];
var beers = 1;

function beersOnTheWall() {

    while (beers < 100) {

        if (beers < 99) {
            console.log(beers + " Bottles of beer on the wall, " + beers + " bottles of beer, take one down pass it around, " + beers + " bottles of beer on the wall.");
        }
        else if (beers === 99) {
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


//Constructor Function Objects practice 
function HouseKeeper1(name, yearsOfExperience, age, hasWorkPermit, languages) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper("Amanda", 2, 21, true, ["Spanish", "English"]);


//Methods
function() {
    alert("Cleaning in progress...");
}

