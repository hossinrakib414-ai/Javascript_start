// //question 1
// let price1 = 5;
// let price2 = 10;
// console.log(price1 == price2);
// console.log(price1 === price2);
// console.log(price1 != price2);
// console.log(price1 !== price2);
// console.log(price1 > price2);
// console.log(price1 < price2);
// console.log(price1 >= price2);
// console.log(price1 <= price2);

// //question_2
// let result1 = "5";
// let result2 = 5;
// console.log(result1 == result2);
// console.log(result1 === result2);
// question_3

// let isRaining = true;
// if (isRaining) {
//   console.log("Take an umbrella");
//  }
// else {
//   console.log("Today hot temperator");

//   }

// question_4

// let stock = 0;
// if (stock === 0) {
//   console.log("Out of stock");
// }
// let number = -8;
// if (number > 0) {
//   console.log("Positive");
// }
// else {
//   console.log("Negative");
// }
// let year = 2024;
// if(year % 4 === 0) {
//   console.log("Leap year")
// }
// else {
//   "Not a Leap Year"
// }

// let speed = 100;
// if (speed > 80) {
//   console.log("Overspeeding");
// }
// else {
//   console.log("Normal speed");
// }
// let age = 20;
// let hasTicket = true;
// if (age > 18 && hasTicket) {
//   console.log( "Entry allowed");
// }
// let isWeekend = true;
// let isHoliday = true;
// if (isWeekend || isHoliday) {
//   console.log("No work today");
// }
// let username = "Admin";
// let password = 1236;
// if (username === "Admin" && password === 1236) {
//   console.log("Login successfully");
// }
// else {
//   console.log("Invalid username or password");
// }
// const marks = 50;
// if (marks >= 80) {
//   console.log("A+");
// }
// else if (marks > 70) {
//   console.log("A");
// }
// else if (marks > 60) {
//   console.log("B");
// }
// else if (marks > 50) {
//   console.log("C")
// }
// else if (marks > 40) {
//   console.log("F");
// }

// let month = 7;
// if (month === 12 || month === 1 || month === 2) {
//   console.log("Winter");
// }
// else if (month === 3 || month === 4 || month === 5) {
//   console.log("Summer");
// }
// else if (month === 6 || month === 7 || month === 8){
//   console.log("Monsoon");
// }
// else if (month === 9 || month === 10) {
//   console.log("Autumn");
// }
// else if (month === 11) {
//   console.log("Late Autumn")
// }
// else {
//   console.log("Invalid month");
// }
// let age = 20;
// let hasID = true;
// if (age >= 18) {
//   if (hasID) {
//     console.log("eligible to vote");
//   }
//   else {
//     console.log("You need a valid ID to vote");
//   }
  
// }
// else {
//     console.log("Not eligible to vote");
//   }
// let isLoggedI = true;
// let isAdmin = false;
// if (isLoggedI) {
//   if (isAdmin) {
//     console.log("Admin Dashboard")
//   }
//   else {
//     console.log("User Dashboard")
//   }
// }
// else {
//   console.log("Please Login");
// }
// let number = 7;
// let result = (number % 2 === 0) ? "even" : "odd";
// console.log(result);
// let age = 20;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result);
  
// let price = 1000;
// let result = (price > 1000) ? "Expensive" : "Affordable";
// console.log(result);

// let hasPermission = true;
// if (!hasPermission) {
//   console.log("Access Denied");
// }
// else {
//   console.log("Access Granted");
// }
// let isOnlin = false;
// if (!isOnlin) {
//   console.log("User is offline");
// }
// let totalCard = 1500;
// let isMember = true;
// if (totalCard > 1000 && isMember) {
//   console.log("20% Discount Applied");
// }
// else if (totalCard > 1000) {
//   console.log("10% Discount Applied");
// }
// else {
//   console.log("No Discount");
// }
// let userName = "admin";
// let password = "12345";
// let correctUsername = "admin"
// let correctpassword = "12345"
// let isAdmin = true;
// if (userName === correctUsername && password === correctpassword) {
//   console.log("Welcome to the Admin Dashboard");
// }
// else {
//   console.log("Invalid Username or Password");
// }
// let hour = 24;
// if (hour > 18) {
//   console.log("good day");
// }
// let rain = false;
// if (rain) {
//   console.log("ছাতা নিয়ে বাইরে যাও।");
// }
// else {
//   console.log("তবে ছাতা ছাড়া যাও");
// }
// let age = 16;
// if (age >= 18) {
//   console.log("You can vote")
// }
// else {
//   console.log("You are little boy you can don't vote");
// }
// let marks = 75;
// if (marks >= 80) {
//   console.log("A+")
// }
// else if (marks >= 70) {
//   console.log("A")
// }
// else if (marks > 60) {
//   console.log("B")
// }
// else if (marks > 50) {
//   console.log("C")
// }
// else {
//   console.log("F");
// }
// let marks = 20;
// let result = (marks >= 80 && marks > 60) ? "pass" : "Fail"
// console.log(result);

// for (let i = 1; i <= 5; i++){
//   console.log("Hello");
// }
// let count = 1;
// while (count <= 3) {
//   console.log("Hello BD");
// }

/**
 * 1.Strating situation condition
 * 2.count value adapt
 * 3.Stopping condition(until or fixed number of times)
 * 4.Repetitive same or similar task
 * 
 */

//How to write Loop:
   
// const count = 0;
// let count = 0;
// cound < 10;
// count++;
// console.log("Do somthing")
 
// For Loop:

// for (initialization; condition; modification){
//   repetitive task
// }

// 1.Initialization: লুপ কোথা থেকে শুরু হবে(যেমন: $i = 0$)।
// 2.Condition: লুপটি কতক্ষণ চলবে(শর্ত সত্য হওয়া পর্যন্ত)।
// 3.Increment / Decrement: প্রতিবার লুপ ঘোরার পর ভ্যালু কত করে বাড়বে বা কমবে।

// for (let count = 0; count < 100; count++){
//   console.log("do somthing");
// }
// for (let i = 3; i < 50; i++){
//   console.log(i);
// }
// for (let i = 0; i <= 10; i++){
//   console.log(i);
// }
// let count = 0;
// while (count < 10) {
//   console.log('inside while loop', count);
//   count++;
// }
// let i = 10;
// while (i <= 50) {
//   console.log('inside the number', i)
//   i++
// }
// for (let i = 0; i < 11; i++){
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i)
//   i++
// }
// let i = 51;
// while (i <= 70) {
//   console.log(i)
//   i++
// }
// for (let i = 135; i <= 149; i++){
//   console.log(i);
// }
// let i = 135;
// while (i < 150) {
//   console.log(i);
//   i=i+3
// }
// for (let i = 1; i < 30; i = i+2){
//   console.log(i)
// }
// let i = 2;
// while (i < 30) {
//   console.log(i);
//   i=i+2
// }
// for (let i = 2; i < 20; i = i + 2){
//   console.log(i);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++
// }
// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }
// let sum = 0;
// for (let i = 1; i <= 10; i++){
//   sum = sum + i;
//   console.log(i, sum);
// }
// let sum = 0;
// for (let i = 2; i <= 10; i = i + 2){
//   sum = sum + i;
//   console.log(i,sum)
// }
// let sum = 0;
// for (let i = 1; i < 10; i++){
//   sum = sum + i
//   console.log(i,sum)
// }
// for (let i = 0; i <= 10; i = i + 2){
//   console.log(i);
// }
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i=i+2
// }
// let sum = 0;
// for (let i = 1; i < 20;i++){
//   sum = sum + i;
//   console.log(i, sum);
//}
// let sum = 0;
// for (let i = 2; i <= 20; i = i + 2){
//   sum = sum + i;
//   console.log(i,sum);
// }

// let sum = 0;
// for (let i = 1; i < 20; i = i + 2){
//   sum = sum + i
//   console.log(i,sum);
// }
// for (let i = 10; i >= 3; i--){
//   console.log(i);
  
// }
// console.log('Start count')
// for (i = 5; i > 0; i--){
//   console.log(i);
// }
// console.log('Booooom')
// const number = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(number, 'X', i," = ", number * i)
// }
// const number = 4;
// for (let i = 1; i <= 10; i++){
//   console.log(number, ' x ', i, ' = ', number * i)
// }
// const number = 5;
// for (let i = 1; i <= 10; i++){
//   console.log(number, ' x ', i, ' = ', number * i);
// }
// const number = 3;
// for (let i = 1; i <= 10; i++){
//   console.log(number,' x ', i, '=',number * i)
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--){
//   console.log(i);
// }
// for (let i = 1; i < 20; i = i + 2){
//   console.log(i);
// }
// for (let i = 0; i < 30; i=i+3){
//   console.log(i)
// }
// for (let i = 1; i <=15; i++){
//   console.log(i)
// }
// for (let i = 20; i <=30; i=i+2){
//   console.log(i)
// }
// for (let i = 20; i >=0; i--){
//   console.log(i)
// }
// for (let i = 9; i >=1; i--){
//   console.log(i)
// }
// for (let i =100; i >=0; i=i-5){
//   console.log(i)
// }
// for (let i = 0; i <= 100; i++){
//   if (i > 5) {
//     break;
//   }
//   console.log(i);
// }
// let count = 0;
// while (count < 10) {
//   if (count < 4) {
//     console.log('it sis break')
//   }
//   console.log('value', count)
//   count++
// }
// for (let i = 0; i < 10; i++){
//   if (i % 2 === 0) {
//     continue;
//   }
// console.log('value of i', i);
//}
// let i = 0;
// while (i > 5) {
//   console.log('value of i', i);
//   i++
// }

// let i = 0;
// do {
//   console.log('value of i', i);
//   i++
// } while (i > 5);
// for (let i = 0; i < 10; i++){
//   if (i === 3)
//     continue;
//   if (i === 6)
//     break;
//   console.log(i);
// }

// for (let i = 0; i < 5; i++){
//   console.log("Hello");
// }

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// let i = 10;
// while (i >= 1) {
//   console.log(i)
//   i--
// }
// let i = 0;
// while (i <= 7) {
//   console.log(i,'Loop চলছে')
//   i++
// }
// for (let i = 2; i <= 30; i = i + 2){
//   console.log(i);
// }
let sum = 0;
for (let i = 1; i <= 20; i++){
  sum = sum + i
  console.log(i, sum);
}
