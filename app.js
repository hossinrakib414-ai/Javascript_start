//question 1
let price1 = 5;
let price2 = 10;
console.log(price1 == price2);
console.log(price1 === price2);
console.log(price1 != price2);
console.log(price1 !== price2);
console.log(price1 > price2);
console.log(price1 < price2);
console.log(price1 >= price2);
console.log(price1 <= price2);

//question_2
let result1 = "5";
let result2 = 5;
console.log(result1 == result2);
console.log(result1 === result2);
question_3

let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella");
 }
else {
  console.log("Today hot temperator");

  }

question_4

let stock = 0;
if (stock === 0) {
  console.log("Out of stock");
}
let number = -8;
if (number > 0) {
  console.log("Positive");
}
else {
  console.log("Negative");
}
let year = 2024;
if(year % 4 === 0) {
  console.log("Leap year")
}
else {
  "Not a Leap Year"
}

let speed = 100;
if (speed > 80) {
  console.log("Overspeeding");
}
else {
  console.log("Normal speed");
}
let age = 20;
let hasTicket = true;
if (age > 18 && hasTicket) {
  console.log( "Entry allowed");
}
let isWeekend = true;
let isHoliday = true;
if (isWeekend || isHoliday) {
  console.log("No work today");
}
let username = "Admin";
let password = 1236;
if (username === "Admin" && password === 1236) {
  console.log("Login successfully");
}
else {
  console.log("Invalid username or password");
}
const marks = 50;
if (marks >= 80) {
  console.log("A+");
}
else if (marks > 70) {
  console.log("A");
}
else if (marks > 60) {
  console.log("B");
}
else if (marks > 50) {
  console.log("C")
}
else if (marks > 40) {
  console.log("F");
}

let month = 7;
if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
}
else if (month === 3 || month === 4 || month === 5) {
  console.log("Summer");
}
else if (month === 6 || month === 7 || month === 8){
  console.log("Monsoon");
}
else if (month === 9 || month === 10) {
  console.log("Autumn");
}
else if (month === 11) {
  console.log("Late Autumn")
}
else {
  console.log("Invalid month");
}
let age = 20;
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log("eligible to vote");
  }
  else {
    console.log("You need a valid ID to vote");
  }
  
}
else {
    console.log("Not eligible to vote");
  }
let isLoggedI = true;
let isAdmin = false;
if (isLoggedI) {
  if (isAdmin) {
    console.log("Admin Dashboard")
  }
  else {
    console.log("User Dashboard")
  }
}
else {
  console.log("Please Login");
}
let number = 7;
let result = (number % 2 === 0) ? "even" : "odd";
console.log(result);
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
  
let price = 1000;
let result = (price > 1000) ? "Expensive" : "Affordable";
console.log(result);

let hasPermission = true;
if (!hasPermission) {
  console.log("Access Denied");
}
else {
  console.log("Access Granted");
}
let isOnlin = false;
if (!isOnlin) {
  console.log("User is offline");
}
let totalCard = 1500;
let isMember = true;
if (totalCard > 1000 && isMember) {
  console.log("20% Discount Applied");
}
else if (totalCard > 1000) {
  console.log("10% Discount Applied");
}
else {
  console.log("No Discount");
}
let userName = "admin";
let password = "12345";
let correctUsername = "admin"
let correctpassword = "12345"
let isAdmin = true;
if (userName === correctUsername && password === correctpassword) {
  console.log("Welcome to the Admin Dashboard");
}
else {
  console.log("Invalid Username or Password");
}
let hour = 24;
if (hour > 18) {
  console.log("good day");
}
let rain = false;
if (rain) {
  console.log("ছাতা নিয়ে বাইরে যাও।");
}
else {
  console.log("তবে ছাতা ছাড়া যাও");
}
let age = 16;
if (age >= 18) {
  console.log("You can vote")
}
else {
  console.log("You are little boy you can don't vote");
}
let marks = 75;
if (marks >= 80) {
  console.log("A+")
}
else if (marks >= 70) {
  console.log("A")
}
else if (marks > 60) {
  console.log("B")
}
else if (marks > 50) {
  console.log("C")
}
else {
  console.log("F");
}
let marks = 20;
let result = (marks >= 80 && marks > 60) ? "pass" : "Fail"
console.log(result);

for (let i = 1; i <= 5; i++){
  console.log("Hello");
}
let count = 1;
while (count <= 3) {
  console.log("Hello BD");
}