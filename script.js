/* 
* Part 1: JavaScript Basics
*/

// 1.1 Variables and Data Types:

// String variable
let myString = "Hello, World!";
console.log("Value of myString:", myString);
console.log("Type of myString:", typeof myString);

// Number variable
let myNumber = 42;
console.log("Value of myNumber:", myNumber);
console.log("Type of myNumber:", typeof myNumber);

// Boolean variable
let myBoolean = true;
console.log("Value of myBoolean:", myBoolean);
console.log("Type of myBoolean:", typeof myBoolean);

// Array variable
let myArray = [11, 12, 13, 14, 15];
console.log("Value of myArray:", myArray);
console.log("Type of myArray:", typeof myArray);

// Object variable
let myObject = { name: "John Doe", age: 30 };
console.log("Value of myObject:", myObject);
console.log("Type of myObject:", typeof myObject);



// 1.2 Operators:
function simpleCalculator() {
  // Prompt the user for two numbers
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");

  // Convert the input to numbers
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Check if both inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input! Please enter valid numbers.");
    return;
  }

  // Prompt the user for the operation
  let operation = prompt("Choose an operation (+, -, *, /)");

  // Perform the calculation based on the operation
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      alert("The result of " + num1 + " + " + num2 + " is " + result);
      break;
    case "-":
      result = num1 - num2;
      alert("The result of " + num1 + " - " + num2 + " is " + result);
      break;
    case "*":
      result = num1 * num2;
      alert("The result of " + num1 + " * " + num2 + " is " + result);
      break;
    case "/":
      // Check for division by zero
      if (num2 === 0) {
        alert("Error: Cannot divide by zero.");
      } else {
        result = num1 / num2;
        alert("The result of " + num1 + " / " + num2 + " is " + result);
      }
      break;
    default:
      alert("Invalid operation! Please enter one of +, -, *, /.");
      break;
  }
}

// Call the function to execute the calculator
simpleCalculator();



// 1.3 Functions:
// Function that takes a name as a parameter and returns a greeting message
function greetUser() {
  // Get the value from the input element
  let name = document.getElementById("userName").value;

  if (name) {
    let message = "Hello, " + name + "! Welcome to our website.";
    
    // DOM manipulation
    document.getElementById("greetingMessage").innerText = message;
  } else {
    // Default message if no name is entered
    document.getElementById("greetingMessage").innerText = "Please enter your name.";
  }
}




/* 
* Part 2: JavaScript Control Structures 
*/

// 2.1 If Statements:
// Function to check if the user is eligible to vote based on their age
function checkEligibility() {
  // Prompt the user for their age
  let age = prompt("Please enter your age:");

  // Convert the input to a number
  age = parseInt(age);

  // Check if the input is a valid number
  if (isNaN(age)) {
    document.getElementById("eligibilityMessage").innerText = "Please enter a valid age.";
  } else {
    // Use an if statement to check if the user is eligible to vote
    if (age >= 18) {
      document.getElementById("eligibilityMessage").innerText = "You are eligible to vote!";
    } else {
      document.getElementById("eligibilityMessage").innerText = "You are not eligible to vote.";
    }
  }
}


// 2.2 Loops
// Function to create and display numbers from 1 to 10 in an ordered list
function displayNumbers() {
  // Get the reference to the ordered list element
  let numberList = document.getElementById("numberList");

  // Loop through numbers from 1 to 10
  for (let i = 1; i <= 10; i++) {
    // Create a new list item element for each number
    let listItem = document.createElement("li");
    // Set the text content of the list item
    listItem.innerText = i;
    // Append the list item to the ordered list
    numberList.appendChild(listItem);
  }
}

// Call the function to display numbers when the page loads
displayNumbers();




/* Part 3: Introduction to the DOM */

// Function to modify content dynamically
function modifyContent() {
  // Change the text of the <h1> element
  document.querySelector("h1").innerText = "JavaScript in Action!";

  // Create a new <p> element
  let newParagraph = document.createElement("p");
  // Set the text of the new <p> element
  newParagraph.innerText = "This content was added dynamically using JavaScript.";

  // Get the <div> with the id "dynamic-content"
  let dynamicContentDiv = document.getElementById("dynamic-content");

  // Append the new <p> element inside the dynamic-content div
  dynamicContentDiv.appendChild(newParagraph);
}

// Call the function to modify the content when the page loads
modifyContent();
