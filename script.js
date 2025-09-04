// 1. Check if string contains "JavaScript"
const str1 = "Hello, Welcome to JavaScript!";
function containsJavaScript(str) {
    return str.includes("JavaScript");
}
console.log("Program 1:", containsJavaScript(str1)); // true


// 2. Convert string to uppercase
let text2 = "hello world";
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log("Program 2:", toUpperCase(text2)); // "HELLO WORLD"


// 3. Remove leading and trailing spaces
const str3 = " Learn JS ";
function trimString(str) {
  return str.trim();
}
console.log("Program 3:", trimString(str3)); // "Learn JS"


// 4. Compare two strings ignoring case
let str4a = "React";
let str4b = "react";
function compareStrings(str1, str2) {
  return str1.toLowerCase() == str2.toLowerCase();
}
console.log("Program 4:", compareStrings(str4a, str4b)); // true


// 5. Count vowels in a string
let text5 = "JavaScript is fun";
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Program 5:", countVowels(text5)); // 6


// 6. Extract domain from email
const email = "user@example.com";
function extractDomain(email) {
  return email.split("@")[1];
}
console.log("Program 6:", extractDomain(email)); // "example.com"


// 7. Greeting based on hour
let hour = 15; // Example input
function greetByHour(hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour <= 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
console.log("Program 7:", greetByHour(10)); // "Good morning"
console.log("Program 7:", greetByHour(15)); // "Good afternoon" 
console.log("Program 7:", greetByHour(20)); // "Good evening"


// 8. Check password strength
let password = "myPass123";
function checkPassword(password) {
  const hasNumber = /\d/; 
  if (password.length >= 8 && hasNumber.test(password)) {
    return "Strong";
  } else {
    return "Weak";
  }
}
console.log("Program 8:", checkPassword("myPass123")); // "Strong"
console.log("Program 8:", checkPassword("myPass")); // "Weak"


// 9. Replace spaces with hyphens
let str9 = "Learn JavaScript step by step";
function hyphenate(str) {
  return str.split(" ").join("-");
}
console.log("Program 9:", hyphenate(str9)); // "Learn-JavaScript-step-by-step"


// 10. Check if string starts with "F"
let str10 = "Frontend";
function startsWithF(str) {
  return str.startsWith("F");
}
console.log("Program 10:", startsWithF(str10)); // true
