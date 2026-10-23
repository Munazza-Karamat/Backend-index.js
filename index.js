// Person's Information
const prompt = require("prompt-sync")();
let name = prompt ("what's your name:");
let age = prompt("what's your age:");
let city = prompt("which city are you from:");
let course = prompt("Which course are you learning:");

console.log("......User Information.......");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
console.log("Course: " + course);

// Arithmetic operations

let num = Number(prompt("Enter the first number: "));
let num1 = Number(prompt("Enter the second number: "));

let sum = num + num1;
let subtraction = num - num1;
let product = num * num1;
let divide = num / num1;

console.log("Sum: " + sum);
console.log("Subtraction: " + subtraction);
console.log("Product: " + product);
console.log("Divide: " + divide);
 
 //  show first name and last name

 let firstname = prompt("Enter your first name: ");
 let lastname = prompt("Enter your last name: ");
 let fullname = firstname + ' ' + lastname;
 console.log('Full Name: ' + fullname);

 // average

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let number3 = Number(prompt("Enter third number: "));
let average = (number1 + number2 + number3) / 3;
console.log('Average: ' + average);

//  find area of a rectangle

 let length = Number(prompt("Enter the length of the rectangle: "));
 let width = Number(prompt("Enter the width of the rectangle): "));
 let area = length*width;
 console.log('area of rectangle' +area);

//  area and perimeter of a square

 let side = Number(prompt("Enter the side of square "));
 let perimeter = 4 * side;
 let area = side * side;
 console.log('Area of square: ' + area);
 console.log('Perimeter of square: ' + perimeter);

// radius of a circle

 let radius = Number(prompt("Enter the radius of the circle: "));
 let area = 3.14 * radius * radius;
 console.log('Area of circle: ' + area);

 celcius and fahrenheit

 let celsius = Number(prompt("Enter temperature in Celsius: "));
 let fahrenheit = (celsius * 9/5) + 32;
 console.log('Temperature in Fahrenheit: ' + fahrenheit);

// minutes to hours

let minutes = Number(prompt("Enter time in minutes: "));
let hours = minutes / 60;
console.log('Time in hours: ' + hours);

//  user age in 2026

 let birthYear = Number(prompt("Enter your birth year: "));
 let age = 2026 - birthYear;
 console.log('Your age in 2026 : ' + age);

// square and cube of the number

 let number = Number(prompt("Enter a number: "));
 let square = number * number;
 let cube = number * number * number;
 console.log('Square of the number: ' + square);
 console.log('Cube of the number: ' + cube);

